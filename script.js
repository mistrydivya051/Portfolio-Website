/* =========================== PROJECT VIDEOS HOVER =========================== */
const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

const videoList = [video1, video2, video3];
const hoverSign = document.querySelector('.hover-sign');

videoList.forEach(video => {
  video.addEventListener("mouseover", () => {
    video.play();
    hoverSign.classList.add("active");
  });
  
  video.addEventListener("mouseout", () => {
    video.pause();
    hoverSign.classList.remove("active");
  });
});


/* =========================== SIDEBAR TOGGLE =========================== */
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

menu.addEventListener("click", () => {
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
});

closeIcon.addEventListener("click", () => {
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
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


/* =========================== EXPERIENCE TIMELINE ANIMATION =========================== */
const timelineEntries = document.querySelectorAll('.timeline-entry');

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


/* =========================== CERTIFICATIONS ANIMATION =========================== */
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


