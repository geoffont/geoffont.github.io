// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Nav border on scroll
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 80
    ? 'rgba(42, 42, 50, 0.7)'
    : 'rgba(42, 42, 50, 0.4)';
});
