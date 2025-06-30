
AOS.init();

// 3D tilt effect for non-touch devices
if (window.matchMedia('(hover: hover)').matches) {
  document.querySelectorAll(".tilt-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    });
  });
}

// Waitlist form handling
document.getElementById("waitlist-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const msg = document.getElementById("form-msg");
  if (email) {
    msg.classList.remove("hidden");
    msg.classList.add("animate__animated", "animate__fadeInUp");
    this.reset();
    setTimeout(() => {
      msg.classList.add("hidden");
      msg.classList.remove("animate__fadeInUp");
    }, 4000);
  }
});

// Typewriter effect
const phrases = [
  "Smarter Customer Support with Mina",
  "Instant AI. Maximum Trust.",
  "Train Mina with Your Data"
];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;

function loopTypewriter() {
  document.getElementById('typewriter').innerHTML = currentPhrase.join('');

  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
  }

  if (isDeleting && j <= phrases[i].length) {
    currentPhrase.pop();
    j--;
  }

  if (j === phrases[i].length) {
    isDeleting = true;
    setTimeout(loopTypewriter, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    currentPhrase = [];
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(loopTypewriter, isDeleting ? 50 : 120);
}
loopTypewriter();
