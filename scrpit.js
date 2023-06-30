// Script para tornar o menu hamburguer funcional
const hamburguerIcon = document.getElementById('hamburguer-icon');
const navLinks = document.querySelector('.nav-links');

hamburguerIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show-nav');
});

// Script para fechar o menu hamburguer ao clicar em um link
const navLinksList = document.querySelectorAll('.nav-links li a');
navLinksList.forEach((link) => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('show-nav')) {
      navLinks.classList.remove('show-nav');
    }
  });
});
