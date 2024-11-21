
document.addEventListener('DOMContentLoaded', () => {
  
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.05)';
      item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
    });
  });
});

