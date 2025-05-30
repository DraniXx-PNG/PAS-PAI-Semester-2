const backToTopBtn = document.getElementById('back-to-top');
const navLinks = document.querySelectorAll('nav a');
const sections = [...document.querySelectorAll('main section')];

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
  highlightNav();
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function highlightNav() {
  const scrollPos = window.scrollY + 100;
  let currentIndex = sections.length - 1;

  for (let i = 0; i < sections.length; i++) {
    if (scrollPos < sections[i].offsetTop) {
      currentIndex = i - 1;
      break;
    }
  }

  navLinks.forEach(link => link.classList.remove('active'));
  if (navLinks[currentIndex]) {
    navLinks[currentIndex].classList.add('active');
  }
}

window.addEventListener('load', highlightNav);
