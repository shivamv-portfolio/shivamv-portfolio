/* ============================================================
   VIDEO EDITOR PORTFOLIO — script.js
   ============================================================ */

/* ===== SCROLL FADE-IN ANIMATION ===== */
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 100);
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-up').forEach((el) => fadeObserver.observe(el));


/* ===== NAVBAR SCROLL EFFECT ===== */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(13,13,13,0.97)';
  } else {
    nav.style.background = 'rgba(13,13,13,0.85)';
  }
});


/* ===== SMOOTH SCROLL TO SECTION ===== */
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}


/* ===== PORTFOLIO FILTER ===== */
function filterPortfolio(cat, btn) {
  // Update active button state
  document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');

  // Show / hide portfolio items
  document.querySelectorAll('.portfolio-item').forEach((item) => {
    if (cat === 'all' || item.dataset.cat === cat) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}


/* ===== CONTACT FORM — CHARACTER COUNTER ===== */
function updateCharCount() {
  const textarea = document.getElementById('projectDetails');
  const counter  = document.getElementById('charCount');
  if (textarea && counter) {
    counter.textContent = textarea.value.length;
  }
}


/* ===== CONTACT FORM — SEND MESSAGE ===== */
function sendMessage() {
  const btn = document.querySelector('.btn-send');
  if (!btn) return;

  // Basic validation
  const name    = document.getElementById('userName')?.value.trim();
  const email   = document.getElementById('userEmail')?.value.trim();
  const service = document.getElementById('userService')?.value;
  const details = document.getElementById('projectDetails')?.value.trim();

  if (!name || !email || !service || !details) {
    btn.textContent      = '⚠ Please fill in all fields';
    btn.style.background = '#c0392b';
    setTimeout(() => {
      btn.textContent      = 'Send Message';
      btn.style.background = '';
    }, 2500);
    return;
  }

  // Success feedback
  btn.textContent      = '✓ Message Sent!';
  btn.style.background = '#28a745';

  setTimeout(() => {
    btn.textContent      = 'Send Message';
    btn.style.background = '';
  }, 3000);
}


/* ===== MOBILE HAMBURGER MENU ===== */
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  if (!links) return;

  const isOpen = links.style.display === 'flex';

  if (isOpen) {
    links.removeAttribute('style');
  } else {
    Object.assign(links.style, {
      display:        'flex',
      flexDirection:  'column',
      position:       'absolute',
      top:            '70px',
      left:           '0',
      right:          '0',
      background:     '#111',
      padding:        '20px',
      gap:            '20px',
      borderBottom:   '1px solid #2a2a2a',
      zIndex:         '999',
    });
  }
}

// Close mobile menu when a nav link is clicked
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    if (links) links.removeAttribute('style');
  });
});
