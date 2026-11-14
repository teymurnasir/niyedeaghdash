/* Client-side search over the 25 sub-sections: matches titles first, then body text. */
(function () {
  'use strict';

  const { el } = window.Agdash;
  const MIN_QUERY_LENGTH = 2;
  const MAX_RESULTS = 7;
  const lower = (text) => text.toLocaleLowerCase('az');

  function buildIndex() {
    return [...document.querySelectorAll('.subsection')].map((node) => ({
      id: node.id,
      title: node.querySelector('.subsection__title').textContent,
      section: document.getElementById(node.dataset.parent + '-title').textContent,
      text: lower(node.textContent),
    }));
  }

  function findMatches(index, query) {
    const needle = lower(query.trim());
    if (needle.length < MIN_QUERY_LENGTH) return null;
    const inTitle = index.filter((item) => lower(item.title).includes(needle));
    const inText = index.filter((item) => !inTitle.includes(item) && item.text.includes(needle));
    return [...inTitle, ...inText].slice(0, MAX_RESULTS);
  }

  function initSearch() {
    const form = document.getElementById('site-search');
    const input = document.getElementById('search-input');
    const list = document.getElementById('search-results');
    const index = buildIndex();

    const close = () => {
      list.hidden = true;
      input.setAttribute('aria-expanded', 'false');
    };

    const show = (matches) => {
      const rows = matches.length
        ? matches.map((item) => el('li', null, el('a', { href: '#' + item.id }, [
          el('strong', { text: item.title }), el('span', { text: item.section }),
        ])))
        : [el('li', { class: 'search__empty', text: 'Nəticə tapılmadı' })];
      list.replaceChildren(...rows);
      list.hidden = false;
      input.setAttribute('aria-expanded', 'true');
    };

    input.addEventListener('input', () => {
      const matches = findMatches(index, input.value);
      if (matches) show(matches); else close();
    });
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const first = list.querySelector('a');
      if (first) first.click();
    });
    list.addEventListener('click', (event) => {
      if (!event.target.closest('a')) return;
      close();
      input.value = '';
      input.blur();
    });
    document.addEventListener('click', (event) => { if (!form.contains(event.target)) close(); });
    form.addEventListener('keydown', (event) => { if (event.key === 'Escape') { close(); input.blur(); } });
  }

  window.Agdash.initSearch = initSearch;
})();
