/* Main menu (5 groups × 5 sub-items from the menu document), mobile toggle and scroll-spy. */
(function () {
  'use strict';

  const { el } = window.Agdash;
  const SPY_MARGIN = '-25% 0px -65% 0px';

  function pad(n) { return String(n).padStart(2, '0'); }

  function buildMenu(menu, sections) {
    menu.replaceChildren(...sections.map((section) =>
      el('li', { class: 'nav-item' }, [
        el('a', { class: 'nav-link', href: '#' + section.id, 'data-section': section.id, text: section.title }),
        el('ul', { class: 'nav-sub', 'aria-label': section.title }, section.subs.map((sub, i) =>
          el('li', null, el('a', { href: '#' + sub.id, 'data-num': pad(i + 1), 'data-sub': sub.id, text: sub.title })))),
      ])));
  }

  function initToggle(toggle, menu) {
    const setOpen = (open) => {
      menu.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        setOpen(false);
        if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      if (menu.contains(document.activeElement)) document.activeElement.blur();
    });
  }

  /* On narrow screens the sub-menu is a horizontal pill strip: keep the active pill in view
     by scrolling the strip only (never the page). */
  function centerActivePill() {
    const pill = document.querySelector('.subnav a.is-active');
    const strip = pill && pill.closest('.subnav');
    if (!strip || strip.scrollWidth <= strip.clientWidth) return;
    const offset = pill.offsetLeft - strip.offsetLeft - (strip.clientWidth - pill.offsetWidth) / 2;
    strip.scrollTo({ left: offset, behavior: 'smooth' });
  }

  function setActive(subId, sectionId) {
    document.querySelectorAll('[data-sub]').forEach((link) =>
      link.classList.toggle('is-active', link.dataset.sub === subId));
    document.querySelectorAll('[data-section]').forEach((link) =>
      link.classList.toggle('is-active', link.dataset.section === sectionId));
    centerActivePill();
  }

  function initScrollSpy() {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (!visible.length) return;
      const target = visible[visible.length - 1].target;
      setActive(target.id, target.dataset.parent);
      history.replaceState(null, '', '#' + target.id);
    }, { rootMargin: SPY_MARGIN });
    document.querySelectorAll('.subsection').forEach((node) => observer.observe(node));

    const hero = document.getElementById('top');
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        setActive(null, null);
        history.replaceState(null, '', location.pathname + location.search);
      }
    }, { threshold: [0.5] }).observe(hero);
  }

  function initNav(sections) {
    const menu = document.getElementById('nav-menu');
    buildMenu(menu, sections);
    initToggle(document.querySelector('.main-nav__toggle'), menu);
    initScrollSpy();
  }

  window.Agdash.initNav = initNav;
})();
