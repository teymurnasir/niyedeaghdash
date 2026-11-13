/* Shared namespace and small DOM helpers. All text goes through textContent — no innerHTML anywhere. */
(function () {
  'use strict';

  const SVG_NS = 'http://www.w3.org/2000/svg';

  function applyAttrs(node, attrs) {
    Object.entries(attrs || {}).forEach(([key, value]) => {
      if (value === undefined || value === null || value === false) return;
      if (key === 'class') node.setAttribute('class', value);
      else if (key === 'text') node.textContent = value;
      else if (key === 'on') Object.entries(value).forEach(([evt, fn]) => node.addEventListener(evt, fn));
      else node.setAttribute(key, value === true ? '' : String(value));
    });
  }

  function appendAll(node, children) {
    [].concat(children || []).forEach((child) => {
      if (child === undefined || child === null || child === false) return;
      node.append(child);
    });
    return node;
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    applyAttrs(node, attrs);
    return appendAll(node, children);
  }

  function svg(tag, attrs, children) {
    const node = document.createElementNS(SVG_NS, tag);
    applyAttrs(node, attrs);
    return appendAll(node, children);
  }

  window.Agdash = { content: [], projects: {}, el, svg };
})();
