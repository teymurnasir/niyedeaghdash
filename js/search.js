/* Client-side search: subsections + projects, diacritic-insensitive, keyboardable. */
(function () {
  'use strict';

  const { el } = window.Agdash;
  const MIN_QUERY_LENGTH = 2;
  const MAX_RESULTS = 8;

  /* Fold Azerbaijani letters so "emek" matches "Əmək", "senaye" matches "Sənaye". */
  function normalize(text) {
    return String(text)
      .toLocaleLowerCase('az')
      .replace(/ə/g, 'e')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ü/g, 'u')
      .replace(/ç/g, 'c')
      .replace(/ş/g, 's')
      .replace(/ğ/g, 'g')
      .replace(/[^a-z0-9.\s]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function tokens(query) {
    return normalize(query).split(' ').filter(Boolean);
  }

  /* Text tokens may match inside words ("emek" → "emekdasliq"); codes must be whole tokens ("11.1" ≠ "11.12"). */
  function includesToken(haystack, token) {
    if (/\d/.test(token)) {
      return new RegExp('(?:^|\\s)' + token.replace(/\./g, '\\.') + '(?=\\s|$)').test(haystack);
    }
    return haystack.includes(token);
  }

  function matchesAll(haystack, needleTokens) {
    return needleTokens.every((token) => includesToken(haystack, token));
  }

  function scoreMatch(item, needleTokens) {
    const titleHit = matchesAll(item.titleNorm, needleTokens);
    const bodyHit = matchesAll(item.textNorm, needleTokens);
    if (!titleHit && !bodyHit) return -1;
    let score = titleHit ? 100 : 20;
    if (item.kind === 'project' && titleHit) score += 25;
    if (item.titleNorm.startsWith(needleTokens[0])) score += 15;
    needleTokens.forEach((token) => {
      if (item.titleNorm.includes(token)) score += 8;
    });
    return score;
  }

  function buildIndex() {
    const items = [];

    document.querySelectorAll('.subsection').forEach((node) => {
      const title = node.querySelector('.subsection__title').textContent;
      const sectionTitle = document.getElementById(node.dataset.parent + '-title').textContent;
      const body = node.querySelector('.subsection__blocks');
      items.push({
        kind: 'section',
        id: node.id,
        href: '#' + node.id,
        title,
        subtitle: sectionTitle,
        titleNorm: normalize(title),
        textNorm: normalize((body || node).textContent),
      });
    });

    document.querySelectorAll('.project[id]').forEach((card) => {
      const sub = card.closest('.subsection');
      if (!sub) return;
      const title = card.querySelector('.project__title').textContent;
      const code = (card.querySelector('.project__code') || {}).textContent || '';
      const sectionTitle = document.getElementById(sub.dataset.parent + '-title').textContent;
      items.push({
        kind: 'project',
        id: card.id,
        href: '#' + card.id,
        title,
        subtitle: 'Layihə ' + code + ' · ' + sectionTitle,
        titleNorm: normalize(title + ' ' + code),
        textNorm: normalize(card.textContent),
      });
    });

    return items;
  }

  function findMatches(index, query) {
    const needleTokens = tokens(query);
    if (!needleTokens.length || normalize(query).length < MIN_QUERY_LENGTH) return null;

    return index
      .map((item) => ({ item, score: scoreMatch(item, needleTokens) }))
      .filter((row) => row.score >= 0)
      .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title, 'az'))
      .slice(0, MAX_RESULTS)
      .map((row) => row.item);
  }

  function initSearch() {
    const form = document.getElementById('site-search');
    const input = document.getElementById('search-input');
    const list = document.getElementById('search-results');
    const index = buildIndex();
    let activeIndex = -1;

    const setOpen = (open) => {
      form.classList.toggle('is-open', open);
      list.hidden = !open;
      input.setAttribute('aria-expanded', String(open));
      if (!open) {
        activeIndex = -1;
        list.querySelectorAll('[aria-selected="true"]').forEach((node) => node.removeAttribute('aria-selected'));
        input.removeAttribute('aria-activedescendant');
      }
    };

    const close = () => setOpen(false);

    const markActive = (next) => {
      const options = [...list.querySelectorAll('[role="option"]')];
      if (!options.length) {
        activeIndex = -1;
        return;
      }
      activeIndex = (next + options.length) % options.length;
      options.forEach((option, i) => {
        const selected = i === activeIndex;
        option.setAttribute('aria-selected', String(selected));
        option.classList.toggle('is-active', selected);
        if (selected) {
          input.setAttribute('aria-activedescendant', option.id);
          option.scrollIntoView({ block: 'nearest' });
        }
      });
    };

    const show = (matches) => {
      if (!matches.length) {
        list.replaceChildren(el('li', { class: 'search__empty', role: 'presentation', text: 'Nəticə tapılmadı' }));
        setOpen(true);
        return;
      }

      list.replaceChildren(...matches.map((item, i) =>
        el('li', { role: 'presentation' }, el('a', {
          id: 'search-option-' + i,
          role: 'option',
          href: item.href,
          'data-kind': item.kind,
        }, [
          el('strong', { text: item.title }),
          el('span', { text: item.subtitle }),
        ]))));
      setOpen(true);
      activeIndex = -1;
    };

    const goToResult = (link) => {
      const id = (link.getAttribute('href') || '').slice(1);
      const target = id && document.getElementById(id);
      close();
      input.value = '';
      input.blur();
      if (!target) return;
      history.pushState(null, '', '#' + id);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const goToActiveOrFirst = () => {
      const options = [...list.querySelectorAll('[role="option"]')];
      const target = options[activeIndex] || options[0];
      if (target) goToResult(target);
    };

    input.addEventListener('input', () => {
      const matches = findMatches(index, input.value);
      if (matches) show(matches); else close();
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!list.hidden) goToActiveOrFirst();
    });

    input.addEventListener('keydown', (event) => {
      if (list.hidden) return;
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        markActive(activeIndex + 1);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        markActive(activeIndex < 0 ? 0 : activeIndex - 1);
      } else if (event.key === 'Escape') {
        event.preventDefault();
        close();
        input.blur();
      }
    });

    list.addEventListener('click', (event) => {
      const link = event.target.closest('a');
      if (!link) return;
      event.preventDefault();
      goToResult(link);
    });

    document.addEventListener('click', (event) => {
      if (!form.contains(event.target)) close();
    });
  }

  window.Agdash.initSearch = initSearch;
})();
