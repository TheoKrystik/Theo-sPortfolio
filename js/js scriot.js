
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
document.addEventListener('DOMContentLoaded', () => {
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  portfolioItems.forEach(item => {
    
    const overlay = document.createElement('div');
    overlay.classList.add('hover-overlay');
    overlay.innerHTML = `
      <p class="overlay-text">Click to Learn More</p>
    `;
    item.appendChild(overlay);

    item.addEventListener('mouseenter', () => {
      overlay.style.opacity = '1';
    });

    item.addEventListener('mouseleave', () => {
      overlay.style.opacity = '0';
    });
    item.addEventListener('click', () => {
      const title = item.querySelector('h3').textContent;
      alert(`More about: ${title}`);
    });
  });
});



