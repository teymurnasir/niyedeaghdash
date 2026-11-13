/* Turns content block descriptions (content/*.js) into DOM nodes. */
(function () {
  'use strict';

  const { el } = window.Agdash;

  function statList(items, className) {
    return el('dl', { class: className }, items.map((item) =>
      el('div', null, [
        el('dt', { text: item.l }),
        el('dd', null, [item.v, item.u ? el('small', { text: item.u }) : null]),
      ])));
  }

  function sourceNote(text) {
    return text ? el('p', { class: 'source', text: 'Mənbə: ' + text }) : null;
  }

  function withTitle(title, node, source) {
    if (!title && !source) return node;
    return el('div', null, [title ? el('h4', { class: 'block-title', text: title }) : null, node, sourceNote(source)]);
  }

  function isHighlighted(block, row) {
    return block.highlight !== undefined && row[0] === block.highlight;
  }

  const renderers = {
    p: (b) => el('p', { text: b.text }),
    lead: (b) => el('p', { class: 'lead', text: b.text }),
    stats: (b) => withTitle(b.title, statList(b.items, 'stats'), b.source),

    list: (b) => withTitle(b.title, el('ul', {
      class: ['list', b.check ? 'list--check' : '', b.cols ? 'list--cols' : ''].join(' ').trim(),
    }, b.items.map((text) => el('li', { text })))),

    table: (b) => el('div', null, [
      el('div', { class: 'table-wrap', tabindex: '0', role: 'region', 'aria-label': b.caption }, [
        el('table', { class: 'table' }, [
          el('caption', { text: b.caption }),
          el('thead', null, el('tr', null, b.head.map((h) => el('th', { scope: 'col', text: h })))),
          el('tbody', null, b.rows.map((row) =>
            el('tr', { class: isHighlighted(b, row) ? 'is-highlight' : null }, row.map((cell, i) =>
              (i === 0 ? el('th', { scope: 'row', text: cell }) : el('td', { text: cell })))))),
        ]),
      ]),
      sourceNote(b.source),
    ]),

    bars: (b) => {
      const max = Math.max(...b.items.map((item) => item.v));
      const rows = b.items.map((item) => {
        const fill = el('span', { class: 'bars__fill' });
        fill.style.setProperty('--v', (item.v / max).toFixed(3));
        return el('div', { class: 'bars__row' + (item.hl ? ' is-highlight' : '') }, [
          el('span', { text: item.l }),
          el('span', { class: 'bars__track' }, fill),
          el('span', { class: 'bars__value', text: item.label || String(item.v).replace('.', ',') }),
        ]);
      });
      return el('figure', { class: 'bars reveal' }, [
        el('figcaption', { class: 'block-title', text: b.caption }),
        ...rows,
        sourceNote(b.source),
      ]);
    },

    cards: (b) => withTitle(b.title, el('div', {
      class: ['cards', b.numbered ? 'cards--numbered' : '', b.dark ? 'cards--dark' : ''].join(' ').trim(),
    }, b.items.map((item) =>
      el('article', { class: 'card' + (item.tone ? ' card--' + item.tone : '') }, [
        item.tag ? el('span', { class: 'card__tag', text: item.tag }) : null,
        el('h4', { class: 'card__title', text: item.title }),
        ...[].concat(item.text || []).map((text) => el('p', { text })),
      ])))),

    quote: (b) => el('blockquote', { class: 'quote' + (b.slogan ? ' quote--slogan' : '') }, [
      el('p', { text: b.text }),
      b.cite ? el('footer', { text: b.cite }) : null,
    ]),

    steps: (b) => withTitle(b.title, el('ol', { class: 'steps' + (b.numbered ? ' steps--numbered' : '') },
      b.items.map((item) => el('li', null, [
        el('span', { class: 'steps__title', text: item.title }),
        item.text ? el('p', { text: item.text }) : null,
      ])))),

    chain: (b) => withTitle(b.title, el('ol', { class: 'chain' },
      b.items.map((text) => el('li', null, el('span', { text }))))),

    projects: (b) => window.Agdash.renderProjects(b.ids),
    links: (b) => el('ul', { class: 'links' }, b.items.map((item) =>
      el('li', null, el('a', { href: item.href, target: '_blank', rel: 'noopener' }, [
        el('strong', { text: item.label }),
        el('span', { text: item.href.replace('https://', '') }),
      ])))),
  };

  function renderBlock(block) {
    const render = renderers[block.t];
    if (!render) throw new Error('Naməlum blok növü: ' + block.t);
    return render(block);
  }

  window.Agdash.renderBlock = renderBlock;
  window.Agdash.statList = statList;
})();
