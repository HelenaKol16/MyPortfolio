document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.portfolio-link');
  const modal = document.getElementById('iframe-modal');
  const iframe = document.getElementById('iframe-content');
  const closeBtn = document.getElementById('iframe-close');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const src = this.getAttribute('data-src');
      iframe.src = src;
      modal.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', function () {
    modal.classList.remove('active');
    iframe.src = '';
  });

  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.remove('active');
      iframe.src = '';
    }
  });
});
