const hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
     if (entry.isIntersecting) {
       entry.target.classList.add('show');
     };
  });
});

hiddenElements.forEach((e1) => observer.observe(e1));

// Typewriter effect
document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector(".changing_text");
  const texts = ["Adam.", "an ambitious front-end developer.", "a resourceful front-end developer.", "a creative front-end developer."];
  let currentIndex = 0;

  function typeWriter(text, index, callback) {
    if (index < text.length) {
      element.innerHTML = text.substring(0, index + 1);
      setTimeout(() => {
        typeWriter(text, index + 1, callback);
      }, 100);
    } else if (callback) {
      setTimeout(callback, 700);
    }
  }

  function startTextAnimation() {
    typeWriter(texts[currentIndex], 0, () => {
      currentIndex = (currentIndex + 1) % texts.length;
      setTimeout(() => {
        startTextAnimation();
      }, 15000);
    });
  }

  startTextAnimation();
});
