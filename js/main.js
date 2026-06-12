/* ============================================================
   NHI Portfolio — interactions
   Custom cursor, scroll reveal, counters, nav, magnetic buttons,
   case study card tilt.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------- Custom cursor ---------------- */
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorRing = document.querySelector('.cursor-ring');
  const hasCursor = cursorDot && cursorRing && matchMedia('(hover: hover)').matches;

  if (hasCursor) {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
      requestAnimationFrame(animateRing);
    };
    animateRing();

    document.querySelectorAll('a, button, .magnetic, .case-card').forEach((el) => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('is-hover'));
    });

    document.addEventListener('mouseleave', () => {
      cursorDot.classList.add('is-hidden');
      cursorRing.classList.add('is-hidden');
    });
    document.addEventListener('mouseenter', () => {
      cursorDot.classList.remove('is-hidden');
      cursorRing.classList.remove('is-hidden');
    });
  }

  /* ---------------- Navbar: scroll state + active link ---------------- */
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll);

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      document.body.classList.toggle('nav-open');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        document.body.classList.remove('nav-open');
      });
    });
  }

  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('[data-nav]');

  if (sections.length && navAnchors.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navAnchors.forEach((a) => {
            a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px' });

    sections.forEach((section) => navObserver.observe(section));
  }

  /* ---------------- Scroll reveal ---------------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger, .timeline-item');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------------- Animated counters ---------------- */
  const counters = document.querySelectorAll('[data-count]');

  const animateCounter = (el) => {
    const target = parseFloat(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1600;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = `${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach((el) => counterObserver.observe(el));

  /* ---------------- Magnetic buttons ---------------- */
  const magnets = document.querySelectorAll('.magnetic');

  magnets.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });

  /* ---------------- Case study card tilt ---------------- */
  const tiltCards = document.querySelectorAll('.tilt');

  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

});
