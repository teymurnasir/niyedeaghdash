/* Investment project cards and the shared detail dialog. */
(function () {
  'use strict';

  const { el } = window.Agdash;
  const IMAGE_DIR = 'assets/img/projects/';

  function factList(facts) {
    return el('dl', { class: 'facts' }, facts.map(([label, value]) =>
      el('div', null, [el('dt', { text: label }), el('dd', { text: value })])));
  }

  function openDialog(project) {
    const dialog = document.getElementById('project-dialog');
    const close = el('button', {
      class: 'project-dialog__close', type: 'button', 'aria-label': 'Bağla', text: '×',
      on: { click: () => dialog.close() },
    });
    const sections = project.details.map((group) => el('section', null, [
      el('h4', { text: group.title }),
      el('ul', { class: 'list' }, group.items.map((text) => el('li', { text }))),
    ]));

    dialog.replaceChildren(
      el('header', { class: 'project-dialog__head' }, [
        el('div', null, [
          el('p', { class: 'kicker kicker--light', text: 'Layihə ' + project.code }),
          el('h3', { id: 'project-dialog-title', text: project.title }),
        ]),
        close,
      ]),
      el('div', { class: 'project-dialog__body' }, [
        el('p', { class: 'lead', text: project.summary }),
        factList(project.facts),
        ...sections,
        el('figure', null, [
          el('img', { src: IMAGE_DIR + project.image, alt: project.imageAlt, loading: 'lazy' }),
          el('figcaption', { text: 'Hesabatdan: ' + project.imageAlt }),
        ]),
      ]),
    );
    dialog.showModal();
  }

  function projectCard(project) {
    return el('article', { class: 'project reveal' }, [
      el('div', { class: 'project__media' }, [
        el('img', { src: IMAGE_DIR + project.image, alt: project.imageAlt, loading: 'lazy', width: '1400', height: '933' }),
        el('span', { class: 'project__code', text: project.code }),
      ]),
      el('div', { class: 'project__body' }, [
        el('h4', { class: 'project__title', text: project.title }),
        el('p', { text: project.summary }),
        factList(project.facts),
        el('button', {
          class: 'btn btn--dark', type: 'button', text: 'Ətraflı bax',
          'aria-haspopup': 'dialog', on: { click: () => openDialog(project) },
        }),
      ]),
    ]);
  }

  function renderProjects(ids) {
    return el('div', { class: 'projects' }, ids.map((id) => {
      const project = window.Agdash.projects[id];
      if (!project) throw new Error('Layihə tapılmadı: ' + id);
      return projectCard(project);
    }));
  }

  function initDialog() {
    const dialog = document.getElementById('project-dialog');
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  }

  window.Agdash.renderProjects = renderProjects;
  window.Agdash.initProjectDialog = initDialog;
})();
