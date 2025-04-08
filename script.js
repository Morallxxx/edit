
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const body = document.body;
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      
      // Toggle icon between menu and X
      const currentIcon = mobileMenuButton.querySelector('i');
      if (currentIcon) {
        if (mobileMenu.classList.contains('active')) {
          currentIcon.setAttribute('data-lucide', 'x');
        } else {
          currentIcon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
      }
      
      // Prevent background scrolling when menu is open
      if (mobileMenu.classList.contains('active')) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        body.style.overflow = '';
        const icon = mobileMenuButton.querySelector('i');
        if (icon) {
          icon.setAttribute('data-lucide', 'menu');
          lucide.createIcons();
        }
      });
    });
  }
  
  // Enhanced header scroll effect - use querySelector with the actual header tag instead of class
  const header = document.querySelector('header');
  function handleScrollHeader() {
    if (header) {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }
  
  window.addEventListener('scroll', handleScrollHeader);
  handleScrollHeader(); // Check on initial load
  
  // Scroll to top button
  const scrollToTopButton = document.getElementById('scroll-to-top');
  
  function handleScrollToTop() {
    if (scrollToTopButton) {
      if (window.scrollY > 300) {
        scrollToTopButton.classList.add('visible');
      } else {
        scrollToTopButton.classList.remove('visible');
      }
    }
  }
  
  window.addEventListener('scroll', handleScrollToTop);
  handleScrollToTop(); // Check on initial load
  
  if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Scroll progress indicator
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);
  
  function updateScrollProgress() {
    const windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (windowScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  }
  
  window.addEventListener('scroll', updateScrollProgress);
  
  // Enhanced FAQ accordion with smoother animations
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.parentElement;
      const isActive = faqItem.classList.contains('active');
      
      // Close all FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        const icon = item.querySelector('i');
        if (icon) {
          icon.setAttribute('data-lucide', 'chevron-down');
        }
      });
      
      // If clicked item was not active, open it
      if (!isActive) {
        faqItem.classList.add('active');
        const icon = faqItem.querySelector('i');
        if (icon) {
          icon.setAttribute('data-lucide', 'chevron-up');
        }
      }
      
      lucide.createIcons();
    });
  });
  
  // Countdown timer with flip animation
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');
  
  if (hoursElement && minutesElement && secondsElement) {
    let hours = parseInt(hoursElement.textContent);
    let minutes = parseInt(minutesElement.textContent);
    let seconds = parseInt(secondsElement.textContent);
    
    const countdown = setInterval(function() {
      seconds--;
      
      if (seconds < 0) {
        seconds = 59;
        minutes--;
        
        if (minutes < 0) {
          minutes = 59;
          hours--;
          
          if (hours < 0) {
            clearInterval(countdown);
            hours = 0;
            minutes = 0;
            seconds = 0;
          }
        }
      }
      
      // Add flip animation on change
      if (seconds === 59) {
        secondsElement.classList.add('flip');
        setTimeout(() => secondsElement.classList.remove('flip'), 500);
      }
      
      if (minutes === 59 && seconds === 59) {
        minutesElement.classList.add('flip');
        setTimeout(() => minutesElement.classList.remove('flip'), 500);
      }
      
      hoursElement.textContent = hours.toString().padStart(2, '0');
      minutesElement.textContent = minutes.toString().padStart(2, '0');
      secondsElement.textContent = seconds.toString().padStart(2, '0');
    }, 1000);
  }
  
  // Scroll animations using Intersection Observer
  function handleScrollAnimations() {
    const animationElements = document.querySelectorAll('.animate-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const delay = element.getAttribute('data-delay') || 0;
          
          setTimeout(() => {
            element.classList.add('animate');
          }, delay * 1000);
          
          observer.unobserve(element);
        }
      });
    }, {
      threshold: 0.15
    });
    
    animationElements.forEach(element => {
      observer.observe(element);
    });
  }
  
  handleScrollAnimations();
  
  // Add parallax effect to hero section
  const heroSection = document.querySelector('.hero');
  const backgroundElements = document.querySelector('.background-elements');
  
  if (heroSection && backgroundElements) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition < window.innerHeight) {
        backgroundElements.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    });
  }
  
  // Add hover effects to interactive elements
  const interactiveElements = document.querySelectorAll('.cta-button, .problem-card, .solution-card, .benefit-card, .testimonial-card, .how-step, .objection-card');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.transform = this.style.transform ? this.style.transform + ' scale(1.02)' : 'scale(1.02)';
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.transform = this.style.transform.replace(' scale(1.02)', '');
      if (this.style.transform === 'scale(1.02)') {
        this.style.transform = '';
      }
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Open first FAQ item by default
  if (faqQuestions.length > 0) {
    faqQuestions[0].click();
  }
});
