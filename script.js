// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
// Form submission
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for your inquiry! We'll respond soon.");
  this.reset();
});
