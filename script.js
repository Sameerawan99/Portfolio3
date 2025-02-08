// Initialize AOS
AOS.init({
    duration: 1200, // Animation duration
    once: true, // Whether animation should happen only once
  });
  
  // Typed.js initialization
  if (typeof Typed !== 'undefined') {
    var typed = new Typed(".auto-type", {
      strings: ["Front-End Web Developer", "Engineer", "Student"],
      typeSpeed: 90,
      backSpeed: 80,
      loop: true
    });
  } else {
    console.error('Typed.js library failed to load');
  }
  
  // Navigation functions
  function shownav(event) {
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "flex";
  }
  
  function closenav(event) {
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "none";
  }


  document.addEventListener('DOMContentLoaded', function () {
    const skillsSection = document.getElementById('skill');
    const progressBars = document.querySelectorAll('.progress');
  
    function animateProgressBars() {
      progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent + '%';
        const percentText = bar.parentElement.nextElementSibling;
        percentText.textContent = percent + '%';
      });
    }
  
    function handleScroll() {
      const sectionTop = skillsSection.getBoundingClientRect().top;
      const sectionBottom = skillsSection.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
  
      if (sectionTop < windowHeight && sectionBottom > 0) {
        animateProgressBars();
        window.removeEventListener('scroll', handleScroll);
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });