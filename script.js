const videoButtons = document.querySelectorAll('.video-thumb[data-video-id]');

videoButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const videoId = button.dataset.videoId;
    if (!videoId || button.dataset.loaded === 'true') return;

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.title = 'Vídeo institucional';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;

    button.innerHTML = '';
    button.appendChild(iframe);
    button.dataset.loaded = 'true';
    button.setAttribute('aria-label', 'Reproduzindo vídeo');
  });
});

const accordionButtons = document.querySelectorAll('[data-accordion-btn]');

accordionButtons.forEach((button) => {
  const card = button.closest('.foco-card');
  const panel = card?.querySelector('.foco-card__painel');
  if (!card || !panel) return;
  panel.hidden = false;
});

accordionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.foco-card');
    const panel = card?.querySelector('.foco-card__painel');
    if (!card || !panel) return;

    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    card.classList.toggle('is-open', !isOpen);

    if (isOpen) {
      button.classList.remove('foco-card__icone--baixo');
      button.classList.add('foco-card__icone--cima');
      button.setAttribute('aria-label', 'Expandir conteúdo');
    } else {
      button.classList.remove('foco-card__icone--cima');
      button.classList.add('foco-card__icone--baixo');
      button.setAttribute('aria-label', 'Recolher conteúdo');
    }
  });
});
