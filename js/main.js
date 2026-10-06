/**
 * ==========================================================================
 * AHSAN AHMAD SIDDIQUI — PORTFOLIO CORE ANIMATION & INTERACTION ENGINE
 * ==========================================================================
 * Performance Guidelines:
 * - 60fps/120fps GPU-accelerated transforms & opacity only (no layout reflows)
 * - Native IntersectionObserver for low-overhead scroll reveals
 * - RequestAnimationFrame throttling for scroll & pointer events
 * - Complete prefers-reduced-motion compliance (WCAG 2.1 AA)
 * - Zero external dependencies (Pure Vanilla JavaScript)
 * ==========================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. ENVIRONMENT & ACCESSIBILITY CONFIGURATION
  // --------------------------------------------------------------------------
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let prefersReducedMotion = motionQuery.matches;

  // React dynamically to system accessibility preference updates
  if (typeof motionQuery.addEventListener === 'function') {
    motionQuery.addEventListener('change', function (e) {
      prefersReducedMotion = e.matches;
      if (prefersReducedMotion) {
        handleReducedMotionActivation();
      }
    });
  } else if (typeof motionQuery.addListener === 'function') {
    motionQuery.addListener(function (e) {
      prefersReducedMotion = e.matches;
      if (prefersReducedMotion) {
        handleReducedMotionActivation();
      }
    });
  }

  // Signal to CSS that JavaScript is initialized and ready for progressive enhancement
  document.documentElement.classList.add('js-ready');

  // --------------------------------------------------------------------------
  // 2. SCROLL REVEAL ENGINE (IntersectionObserver)
  // --------------------------------------------------------------------------
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach(function (el) {
        el.classList.add('is-revealed');
      });
      return;
    }

    // Set initial staggered delays before observer triggers
    revealElements.forEach(function (el) {
      const delay = el.getAttribute('data-delay');
      if (delay) {
        el.style.transitionDelay = delay + 'ms';
      }
    });

    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const target = entry.target;
            target.classList.add('is-revealed');

            // Clear transition-delay after animation finishes so hover effects aren't delayed
            const delay = parseInt(target.getAttribute('data-delay') || '0', 10);
            setTimeout(function () {
              target.style.transitionDelay = '';
            }, delay + 800);

            observer.unobserve(target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1,
      }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  // --------------------------------------------------------------------------
  // 3. DYNAMIC HERO TYPEWRITER EFFECT
  // --------------------------------------------------------------------------
  function initTypewriter() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    let words = [];
    try {
      const wordsAttr = typingElement.getAttribute('data-words');
      words = wordsAttr ? JSON.parse(wordsAttr) : [];
    } catch (err) {
      words = [typingElement.textContent.trim()];
    }

    if (!Array.isArray(words) || !words.length) {
      words = ['Software & Data Engineering'];
    }

    if (prefersReducedMotion) {
      typingElement.textContent = words[0];
      return;
    }

    const typingSpeed = parseInt(typingElement.getAttribute('data-typing-speed') || '80', 10);
    const backspaceSpeed = parseInt(typingElement.getAttribute('data-backspace-speed') || '40', 10);
    const pauseDelay = parseInt(typingElement.getAttribute('data-pause-delay') || '2200', 10);

    let wordIndex = 0;
    let charIndex = words[0].length; // Starts with first word fully visible
    let isDeleting = true; // First action will be backspacing after pauseDelay
    let typingTimer = null;
    let isPaused = false;

    function tick() {
      if (isPaused) return;

      const currentWord = words[wordIndex];

      if (isDeleting) {
        charIndex--;
        typingElement.textContent = currentWord.substring(0, charIndex);

        if (charIndex <= 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          // Small pause before typing next word
          typingTimer = setTimeout(tick, 350);
          return;
        }

        typingTimer = setTimeout(tick, backspaceSpeed);
      } else {
        charIndex++;
        typingElement.textContent = currentWord.substring(0, charIndex);

        if (charIndex >= currentWord.length) {
          isDeleting = true;
          // Pause when word is fully typed
          typingTimer = setTimeout(tick, pauseDelay);
          return;
        }

        // Slight organic variation for humanized typing cadence
        const jitter = Math.floor(Math.random() * 25) - 10;
        const currentSpeed = Math.max(30, typingSpeed + jitter);
        typingTimer = setTimeout(tick, currentSpeed);
      }
    }

    // Initial wait on the pre-rendered first word
    typingTimer = setTimeout(tick, pauseDelay);

    // Pause animation when tab is inactive to preserve CPU & battery
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        isPaused = true;
        clearTimeout(typingTimer);
      } else {
        if (isPaused) {
          isPaused = false;
          typingTimer = setTimeout(tick, 500);
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // 4. ANIMATED METRIC NUMBER COUNTERS
  // --------------------------------------------------------------------------
  function initCounters() {
    const counterElements = document.querySelectorAll('.counter');
    if (!counterElements.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      counterElements.forEach(function (counter) {
        const target = counter.getAttribute('data-target') || '0';
        const prefix = counter.getAttribute('data-prefix') || '';
        const suffix = counter.getAttribute('data-suffix') || '';
        counter.textContent = prefix + target + suffix;
      });
      return;
    }

    // Reset initial text to 0 for smooth count-up
    counterElements.forEach(function (counter) {
      const prefix = counter.getAttribute('data-prefix') || '';
      const suffix = counter.getAttribute('data-suffix') || '';
      counter.textContent = prefix + '0' + suffix;
    });

    const counterObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const targetVal = parseFloat(counter.getAttribute('data-target') || '0');
            const prefix = counter.getAttribute('data-prefix') || '';
            const suffix = counter.getAttribute('data-suffix') || '';
            const duration = 1400; // ms

            let startTime = null;

            function animateCounter(timestamp) {
              if (!startTime) startTime = timestamp;
              const elapsed = timestamp - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Ease-out cubic curve: fast start, soft landing
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              const currentVal = Math.round(targetVal * easeProgress);

              counter.textContent = prefix + currentVal + suffix;

              if (progress < 1) {
                requestAnimationFrame(animateCounter);
              } else {
                counter.textContent = prefix + targetVal + suffix;
              }
            }

            requestAnimationFrame(animateCounter);
            observer.unobserve(counter);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.2,
      }
    );

    counterElements.forEach(function (counter) {
      counterObserver.observe(counter);
    });
  }

  // --------------------------------------------------------------------------
  // 5. STICKY NAVBAR ELEVATION & ACTIVE SECTION TRACKER
  // --------------------------------------------------------------------------
  function initNavbarAndScroll() {
    const siteHeader = document.getElementById('site-header');
    const backToTopBtn = document.getElementById('back-to-top');
    const navLinks = document.querySelectorAll('.primary-nav .nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-drawer .mobile-nav-link');
    const sections = document.querySelectorAll('section[id]');

    let ticking = false;

    function handleScrollUpdates() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      // 1. Header Elevation
      if (siteHeader) {
        if (scrollY > 30) {
          siteHeader.classList.add('is-scrolled');
        } else {
          siteHeader.classList.remove('is-scrolled');
        }
      }

      // 2. Floating Back To Top Button Visibility
      if (backToTopBtn) {
        if (scrollY > 420) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      }

      // 3. Active Navigation Section Detection
      const headerOffset = siteHeader ? siteHeader.offsetHeight : 72;
      let currentSectionId = '';

      // Check if user is near the bottom of document
      const isAtBottom =
        window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        currentSectionId = 'contact';
      } else {
        sections.forEach(function (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= headerOffset + 80 && rect.bottom > headerOffset + 80) {
            currentSectionId = section.getAttribute('id');
          }
        });
      }

      // Update Desktop Nav Active States
      navLinks.forEach(function (link) {
        const href = link.getAttribute('href');
        if (href === '#' + currentSectionId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      // Update Mobile Nav Active States
      mobileLinks.forEach(function (link) {
        const href = link.getAttribute('href');
        if (href === '#' + currentSectionId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      ticking = false;
    }

    window.addEventListener(
      'scroll',
      function () {
        if (!ticking) {
          requestAnimationFrame(handleScrollUpdates);
          ticking = true;
        }
      },
      { passive: true }
    );

    // Initial check on page load
    handleScrollUpdates();
  }

  // --------------------------------------------------------------------------
  // 6. MOBILE DRAWER NAVIGATION MENU
  // --------------------------------------------------------------------------
  function initMobileDrawer() {
    const navToggle = document.getElementById('nav-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    if (!navToggle || !mobileDrawer) return;

    function openDrawer() {
      navToggle.setAttribute('aria-expanded', 'true');
      navToggle.classList.add('active');
      mobileDrawer.classList.add('active');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      document.body.classList.add('menu-open');

      // Focus first link for keyboard accessibility
      const firstLink = mobileDrawer.querySelector('a');
      if (firstLink) {
        firstLink.focus();
      }
    }

    function closeDrawer() {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.classList.remove('active');
      mobileDrawer.classList.remove('active');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-open');
      navToggle.focus();
    }

    navToggle.addEventListener('click', function () {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    // Close when clicking any nav link inside drawer
    mobileDrawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeDrawer();
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
        closeDrawer();
      }
    });

    // Close if user clicks outside mobile drawer content on the overlay
    mobileDrawer.addEventListener('click', function (e) {
      if (e.target === mobileDrawer) {
        closeDrawer();
      }
    });

    // Cleanly close when resizing to desktop width
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024 && mobileDrawer.classList.contains('active')) {
        closeDrawer();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 7. SMOOTH ANCHOR SCROLLING
  // --------------------------------------------------------------------------
  function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const siteHeader = document.getElementById('site-header');

    anchorLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;

        let targetElement = null;
        if (targetId === '#top') {
          targetElement = document.body;
        } else {
          try {
            targetElement = document.querySelector(targetId);
          } catch (err) {
            return;
          }
        }

        if (!targetElement) return;
        e.preventDefault();

        const headerHeight = siteHeader ? siteHeader.offsetHeight : 72;
        let targetPosition = 0;

        if (targetId !== '#top') {
          const rect = targetElement.getBoundingClientRect();
          targetPosition = rect.top + window.pageYOffset - headerHeight;
        }

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
        });

        // Update URL hash cleanly without jumping
        if (history.pushState && targetId !== '#top') {
          history.pushState(null, '', targetId);
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 8. MICRO-INTERACTIONS: PROJECT CARDS 3D TILT & MOUSE TRACKING GLOW
  // --------------------------------------------------------------------------
  function initCardMicroInteractions() {
    // Only enable 3D tilt on devices with precision pointer (mouse)
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!canHover || prefersReducedMotion) return;

    const cards = document.querySelectorAll('.project-card');

    cards.forEach(function (card) {
      let isHovered = false;

      function onMouseMove(e) {
        if (!isHovered) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Set spotlight coordinates for radial gradient shine
        const xPercent = ((x / rect.width) * 100).toFixed(1);
        const yPercent = ((y / rect.height) * 100).toFixed(1);
        card.style.setProperty('--mouse-x', xPercent + '%');
        card.style.setProperty('--mouse-y', yPercent + '%');

        // Subtle 3D tilt (max 3.2 degrees)
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const tiltX = (((y - centerY) / centerY) * -3.2).toFixed(2);
        const tiltY = (((x - centerX) / centerX) * 3.2).toFixed(2);

        card.style.transform =
          'perspective(1000px) rotateX(' +
          tiltX +
          'deg) rotateY(' +
          tiltY +
          'deg) translateY(-4px)';
      }

      card.addEventListener('mouseenter', function () {
        isHovered = true;
      });

      card.addEventListener('mousemove', onMouseMove, { passive: true });

      card.addEventListener('mouseleave', function () {
        isHovered = false;
        card.style.transform = '';
        card.style.setProperty('--mouse-x', '50%');
        card.style.setProperty('--mouse-y', '50%');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 9. 1-CLICK EMAIL COPY WITH CONFIRMATION TOOLTIP
  // --------------------------------------------------------------------------
  function initEmailCopy() {
    const copyBtn = document.getElementById('copy-email-btn');
    if (!copyBtn) return;

    // Check if tooltip already exists, otherwise create it
    let tooltip = copyBtn.querySelector('.copy-tooltip');
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.className = 'copy-tooltip';
      tooltip.setAttribute('role', 'status');
      tooltip.setAttribute('aria-live', 'polite');
      tooltip.innerHTML =
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied to clipboard!';
      copyBtn.appendChild(tooltip);
    }

    const labelSpan = copyBtn.querySelector('.btn-copy-label');
    const originalLabel = labelSpan ? labelSpan.textContent : 'Copy Email';
    let resetTimer = null;

    copyBtn.addEventListener('click', function () {
      const email =
        copyBtn.getAttribute('data-email') || 'ahsanasiddiqui.dev@gmail.com';

      function onSuccess() {
        // Change button visual state
        copyBtn.classList.add('btn-copied');
        if (labelSpan) {
          labelSpan.textContent = 'Copied!';
        }

        // Display animated tooltip
        tooltip.classList.add('show');

        // Clear any pending timeout
        if (resetTimer) clearTimeout(resetTimer);

        // Reset back to initial state after 2.5s
        resetTimer = setTimeout(function () {
          tooltip.classList.remove('show');
          copyBtn.classList.remove('btn-copied');
          if (labelSpan) {
            labelSpan.textContent = originalLabel;
          }
        }, 2500);
      }

      function onError() {
        copyBtn.classList.add('btn-copy-error');
        if (labelSpan) {
          labelSpan.textContent = 'Copy Failed';
        }
        tooltip.textContent = 'Please copy manually: ' + email;
        tooltip.classList.add('show');

        if (resetTimer) clearTimeout(resetTimer);
        resetTimer = setTimeout(function () {
          tooltip.classList.remove('show');
          copyBtn.classList.remove('btn-copy-error');
          if (labelSpan) {
            labelSpan.textContent = originalLabel;
          }
          tooltip.innerHTML =
            '<svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied to clipboard!';
        }, 3500);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(email)
          .then(onSuccess)
          .catch(function () {
            fallbackCopy(email, onSuccess, onError);
          });
      } else {
        fallbackCopy(email, onSuccess, onError);
      }
    });

    // Fallback for environments where Clipboard API is restricted
    function fallbackCopy(text, callback, errorCallback) {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.top = '-9999px';
        textarea.style.left = '-9999px';
        textarea.setAttribute('readonly', '');
        document.body.appendChild(textarea);
        textarea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textarea);
        if (successful) {
          if (callback) callback();
        } else {
          if (errorCallback) errorCallback();
        }
      } catch (err) {
        console.warn('Clipboard copy failed:', err);
        if (errorCallback) errorCallback();
      }
    }
  }

  // --------------------------------------------------------------------------
  // 10. FLOATING BACK TO TOP BUTTON
  // --------------------------------------------------------------------------
  function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    backToTopBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
      // Return focus to top anchor
      const topLink = document.getElementById('top');
      if (topLink) topLink.focus();
    });
  }

  // --------------------------------------------------------------------------
  // 11. REDUCED MOTION SAFE CLEANUP
  // --------------------------------------------------------------------------
  function handleReducedMotionActivation() {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-revealed');
      el.style.transitionDelay = '';
    });
    document.querySelectorAll('.project-card').forEach(function (card) {
      card.style.transform = '';
    });
  }

  // --------------------------------------------------------------------------
  // 12. INITIALIZATION ORCHESTRATOR
  // --------------------------------------------------------------------------
  function initialize() {
    initScrollReveal();
    initTypewriter();
    initCounters();
    initNavbarAndScroll();
    initMobileDrawer();
    initSmoothScroll();
    initCardMicroInteractions();
    initEmailCopy();
    initBackToTop();
  }

  // Run as soon as DOM is interactive
  if (
    document.readyState === 'interactive' ||
    document.readyState === 'complete'
  ) {
    initialize();
  } else {
    document.addEventListener('DOMContentLoaded', initialize);
  }
})();
