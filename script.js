/* ===================== PROJECT VIDEOS HOVER ===================== */
const videoList = document.querySelectorAll('.project-video');

videoList.forEach(video => {
  const hoverSign = video.closest('.project-vidbox')?.querySelector('.hover-sign');

  video.addEventListener("mouseenter", () => {
    video.play();
    hoverSign?.classList.add("active");
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    hoverSign?.classList.remove("active");
  });
});


/* ===================== SIDEBAR TOGGLE ===================== */
const sideBar   = document.querySelector('.sidebar');
const menu      = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');


menu?.addEventListener("click", () => {
  sideBar?.classList.remove("close-sidebar");
  sideBar?.classList.add("open-sidebar");
});

closeIcon?.addEventListener("click", () => {
  sideBar?.classList.remove("open-sidebar");
  sideBar?.classList.add("close-sidebar");
});


/* =========================== SCROLL BUTTONS =========================== */
// Scroll Down Button
const scrollDownBtn = document.getElementById('scroll-down');
const aboutSection = document.getElementById('about');

scrollDownBtn.addEventListener('click', () => {
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

// Scroll To Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* ===================== EXPERIENCE TIMELINE ANIMATION ===================== */
const timelineEntries = document.querySelectorAll('.timeline-entry');

// Reveal on Scroll (fallback for browsers without IntersectionObserver)
function revealOnScroll() {
  const windowH = window.innerHeight;
  timelineEntries.forEach(entry => {
    const rect = entry.getBoundingClientRect();
    if (rect.top < windowH * 0.9) {
      entry.classList.add('visible');
    }
  });
}

// Intersection Observer for smooth fade-in
const observer = new IntersectionObserver(
  entriesList => {
    entriesList.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.2 }
);

timelineEntries.forEach(entry => observer.observe(entry));

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


/* ===================== CERTIFICATIONS ANIMATION ===================== */
const certCards = document.querySelectorAll('.cert-card.timeline-entrys');

function showCertCards() {
  const triggerBottom = window.innerHeight * 0.85;

  certCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('visible');
    } else {
      card.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', showCertCards);
window.addEventListener('load', showCertCards);


/* ===================== SMOOTH SCROLL FOR NAV LINKS ===================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    target?.scrollIntoView({ behavior: "smooth" });
  });
});


/* ===================== ABOUT SECTION FADE-IN ===================== */
const aboutCard = document.querySelector('.about-card');

function revealAboutCard() {
  const windowH = window.innerHeight;
  const cardTop = aboutCard?.getBoundingClientRect().top;

  if (cardTop < windowH * 0.9) {
    aboutCard?.classList.add('show');
  }
}

window.addEventListener('scroll', revealAboutCard);
window.addEventListener('load', revealAboutCard);
