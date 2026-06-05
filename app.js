// app.js - Physics Research Council Interactive Logic

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navigation Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      
      // Animate hamburger to X
      const spans = menuToggle.querySelectorAll('span');
      if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
        
        // Mobile menu styling overlay fallback
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(8, 12, 26, 0.98)';
        navLinks.style.backdropFilter = 'blur(16px)';
        navLinks.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        navLinks.style.padding = '2rem';
        navLinks.style.gap = '1.5rem';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
        
        navLinks.style.display = '';
      }
    });

    // Close menu when clicking link (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          menuToggle.click();
        }
      });
    });
  }

  // 3. Competition Round Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active from buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      // Add active to current button
      button.classList.add('active');

      // Hide all contents
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Show matching content
      const roundId = `round-${button.getAttribute('data-round')}`;
      const targetContent = document.getElementById(roundId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // 4. Modal Interactions (Volunteer Application)
  const volunteerModal = document.getElementById('volunteerModal');
  const openVolunteerModal = document.getElementById('openVolunteerModal');
  const closeVolunteerModal = document.getElementById('closeVolunteerModal');

  if (volunteerModal && openVolunteerModal && closeVolunteerModal) {
    openVolunteerModal.addEventListener('click', (e) => {
      e.preventDefault();
      volunteerModal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Lock background scroll
    });

    closeVolunteerModal.addEventListener('click', () => {
      volunteerModal.classList.remove('active');
      document.body.style.overflow = '';
    });

    // Close on outside click
    volunteerModal.addEventListener('click', (e) => {
      if (e.target === volunteerModal) {
        closeVolunteerModal.click();
      }
    });
  }

  // 5. Partnership Inquiry Interaction
  const openPartnership = document.getElementById('openContactFeedback');
  if (openPartnership) {
    openPartnership.addEventListener('click', () => {
      alert("Partnership package requested! Email us at physicsresearchcouncil@gmail.com with subject '[Partnership Inquiry] [School/Club Name]' and we will send our collaboration kit within 24 hours.");
    });
  }
});
