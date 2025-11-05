// Typing effect for intro text
const intro = document.querySelector(".hero p");
if (intro) {
  const text = intro.textContent;
  intro.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      intro.textContent += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
}

// Fade-in effect on scroll
const cards = document.querySelectorAll(".project-card, .skills-grid span");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));
