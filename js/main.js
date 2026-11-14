/* Assembles the one-page site from the content modules. */
(function () {
  'use strict';

  const { el, renderBlock } = window.Agdash;

  function pad(n) { return String(n).padStart(2, '0'); }

  function renderSubsection(section, sub, index, sectionIndex) {
    return el('section', { class: 'subsection', id: sub.id, 'data-parent': section.id, 'aria-labelledby': sub.id + '-title' }, [
      el('header', { class: 'subsection__head reveal' }, [
        el('span', { class: 'subsection__num', text: pad(sectionIndex + 1) + '.' + (index + 1) }),
        el('h3', { class: 'subsection__title', id: sub.id + '-title', text: sub.title }),
      ]),
      el('div', { class: 'subsection__blocks' }, sub.blocks.map(renderBlock)),
    ]);
  }

  function renderSection(section, sectionIndex) {
    const subnav = el('nav', { class: 'subnav', 'aria-label': section.title + ' — alt bölmələr' }, [
      el('p', { class: 'subnav__label', text: 'Bu bölmədə' }),
      el('ol', null, section.subs.map((sub) =>
        el('li', null, el('a', { href: '#' + sub.id, 'data-sub': sub.id, text: sub.title })))),
    ]);

    return el('section', {
      class: 'section' + (sectionIndex % 2 ? ' section--tint' : ''), id: section.id, 'aria-labelledby': section.id + '-title',
    }, el('div', { class: 'wrap' }, [
      el('header', { class: 'section__head reveal' }, [
        el('span', { class: 'section__num', 'aria-hidden': 'true', text: pad(sectionIndex + 1) }),
        el('div', null, [
          el('p', { class: 'kicker', text: section.kicker }),
          el('h2', { class: 'section__title', id: section.id + '-title', text: section.title }),
          el('p', { class: 'section__intro', text: section.intro }),
        ]),
      ]),
      el('div', { class: 'section__body' }, [
        subnav,
        el('div', null, section.subs.map((sub, i) => renderSubsection(section, sub, i, sectionIndex))),
      ]),
    ]));
  }

  function initReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.filter((entry) => entry.isIntersecting).forEach((entry) => {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
  }

  function renderFooterLinks(sections) {
    document.getElementById('footer-links').replaceChildren(...sections.map((section) =>
      el('li', null, el('a', { href: '#' + section.id, text: section.title }))));
  }

  function scrollToHash() {
    const target = location.hash && document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({ behavior: 'instant' });
  }

  /* Web fonts and images change section heights after first paint; re-align the deep link once they settle. */
  function keepHashAligned() {
    const target = location.hash && document.getElementById(location.hash.slice(1));
    if (!target) return;
    let hasUserScrolled = false;
    ['wheel', 'touchstart', 'keydown'].forEach((type) =>
      window.addEventListener(type, () => { hasUserScrolled = true; }, { once: true, passive: true }));
    const realign = () => { if (!hasUserScrolled) target.scrollIntoView({ behavior: 'instant' }); };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(realign);
    window.addEventListener('load', realign, { once: true });
  }

  function init() {
    const sections = window.Agdash.content;
    document.getElementById('sections').replaceChildren(...sections.map(renderSection));
    renderFooterLinks(sections);
    window.Agdash.initHero();
    window.Agdash.initProjectDialog();
    window.Agdash.initNav(sections);
    window.Agdash.initSearch();
    scrollToHash();
    keepHashAligned();
    initReveal();
  }

  try {
    init();
  } catch (error) {
    document.getElementById('sections').replaceChildren(
      el('p', { class: 'wrap noscript', role: 'alert', text: 'Səhifənin məzmunu yüklənmədi. Zəhmət olmasa, səhifəni yeniləyin.' }));
    throw error;
  }
})();
