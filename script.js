const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

const regionShapes = document.querySelectorAll('.region');
regionShapes.forEach((shape) => {
  shape.addEventListener('focus', () => shape.classList.add('active'));
  shape.addEventListener('blur', () => shape.classList.remove('active'));
});

const editor = document.querySelector('#analysis');
const autosaveEl = document.querySelector('.autosave');
if (editor && autosaveEl) {
  let timeout;
  editor.addEventListener('input', () => {
    autosaveEl.textContent = 'Saving draft…';
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      autosaveEl.textContent = 'Draft autosaved locally';
    }, 600);
  });
}
