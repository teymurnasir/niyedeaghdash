/* Hero visuals: the scalloped brand motif, the "7 neighbours" distance hub and the headline figures. */
(function () {
  'use strict';

  const { svg, statList } = window.Agdash;

  /* Road distances from Ağdaş city: report table 1.1. Spokes are spaced evenly — the diagram shows distance only, not direction. */
  const NEIGHBOURS = [
    { name: 'Oğuz', km: 84.4 },
    { name: 'Göyçay', km: 25.3 },
    { name: 'Bərdə', km: 64.8 },
    { name: 'Ucar', km: 40.6 },
    { name: 'Zərdab', km: 69.0 },
    { name: 'Yevlax', km: 37.9 },
    { name: 'Qəbələ', km: 55.1 },
  ].map((city, i, all) => ({ ...city, bearing: (360 / all.length) * i }));
  const HUB_CENTER = 220;
  const PX_PER_KM = 1.95;
  const RING_KM = [25, 50, 75];

  const HERO_STATS = [
    { v: '107,6', u: 'min', l: 'nəfər əhali (2025)' },
    { v: '1 023', u: 'km²', l: 'ərazi' },
    { v: '7', u: 'region', l: 'ilə həmsərhəd' },
    { v: '525,9', u: 'mln ₼', l: 'məhsul buraxılışı (2025)' },
    { v: '63,2', u: 'mln ₼', l: 'əsas kapitala investisiya (2025)' },
  ];

  function polar(km, bearingDeg) {
    const angle = (bearingDeg - 90) * Math.PI / 180;
    const r = km * PX_PER_KM;
    return { x: HUB_CENTER + r * Math.cos(angle), y: HUB_CENTER + r * Math.sin(angle) };
  }

  function scallopPath(cx, cy, radius, depth, lobes) {
    const STEPS = 240;
    const points = Array.from({ length: STEPS }, (_, i) => {
      const t = (i / STEPS) * Math.PI * 2;
      const r = radius + depth * Math.cos(lobes * t);
      return (cx + r * Math.cos(t)).toFixed(1) + ' ' + (cy + r * Math.sin(t)).toFixed(1);
    });
    return 'M' + points.join('L') + 'Z';
  }

  function neighbourNodes(city) {
    const p = polar(city.km, city.bearing);
    const onLeft = p.x < HUB_CENTER - 10;
    const anchor = Math.abs(p.x - HUB_CENTER) <= 10 ? 'middle' : (onLeft ? 'end' : 'start');
    const dx = anchor === 'middle' ? 0 : (onLeft ? -10 : 10);
    const dy = anchor === 'middle' ? -22 : -2;
    return [
      svg('line', { class: 'hub__spoke', x1: HUB_CENTER, y1: HUB_CENTER, x2: p.x, y2: p.y }),
      svg('circle', { class: 'hub__dot', cx: p.x, cy: p.y, r: 5 }),
      svg('text', { class: 'hub__city', x: p.x + dx, y: p.y + dy, 'text-anchor': anchor, text: city.name }),
      svg('text', { class: 'hub__km', x: p.x + dx, y: p.y + dy + 14, 'text-anchor': anchor,
        text: String(city.km).replace('.', ',') + ' km' }),
    ];
  }

  function drawHub(target) {
    const rings = RING_KM.flatMap((km) => [
      svg('circle', { class: 'hub__ring', cx: HUB_CENTER, cy: HUB_CENTER, r: km * PX_PER_KM }),
      svg('text', { class: 'hub__ring-label', x: HUB_CENTER + 4, y: HUB_CENTER + km * PX_PER_KM - 4, text: km + ' km' }),
    ]);
    target.append(
      ...rings,
      ...NEIGHBOURS.flatMap(neighbourNodes),
      svg('circle', { class: 'hub__pulse', cx: HUB_CENTER, cy: HUB_CENTER, r: 14 }),
      svg('path', { class: 'hub__core', d: scallopPath(HUB_CENTER, HUB_CENTER, 30, 3, 8) }),
      svg('text', { class: 'hub__core-label', x: HUB_CENTER, y: HUB_CENTER + 4, 'text-anchor': 'middle', text: 'AĞDAŞ' }),
    );
  }

  function initHero() {
    document.querySelector('.hero__motif').append(
      svg('path', { d: scallopPath(200, 200, 150, 14, 8), fill: 'none', stroke: 'currentColor', 'stroke-width': 30 }));
    drawHub(document.getElementById('hub-svg'));
    document.getElementById('hero-stats').replaceWith(
      Object.assign(statList(HERO_STATS, 'hero-stats'), { id: 'hero-stats' }));
  }

  window.Agdash.initHero = initHero;
})();
