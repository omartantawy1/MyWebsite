// =====================
// Scroll Animation
// =====================
document.addEventListener("DOMContentLoaded", function () {
  const scrollItems = document.querySelectorAll(
    ".tech-item, .experience-item, .project-card, footer"
  );

  function checkScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    scrollItems.forEach((item) => {
      const boxTop = item.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        item.classList.add("animate");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Animate visible elements on load
});

// =====================
// Dark Mode Toggle
// =====================
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeIcon.src = "images/day-mode.png";
} else {
  document.body.classList.remove("dark-mode");
  themeIcon.src = "images/night-mode.png";
}

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeIcon.src = "images/day-mode.png";
    localStorage.setItem("theme", "dark"); // save
  } else {
    themeIcon.src = "images/night-mode.png";
    localStorage.setItem("theme", "light"); // save
  }

  // Small click animation
  themeIcon.style.transform = "scale(0.8) rotate(-20deg)";
  setTimeout(() => {
    themeIcon.style.transform = "scale(1) rotate(0)";
  }, 200);
});

// =====================
// Hamburger Menu Toggle
// =====================
const hamburger = document.getElementById("hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// =====================
// Floating Tech Bubbles
// =====================
const container = document.querySelector(".tech-container");
const images = document.querySelectorAll(".floating-img");

// Initialize positions and speeds
images.forEach((img) => {
  img.style.left =
    Math.random() * (container.clientWidth - img.clientWidth) + "px";
  img.style.top =
    Math.random() * (container.clientHeight - img.clientHeight) + "px";

  img.dataset.dx = (Math.random() * 0.7 + 0.3) * (Math.random() < 0.5 ? -1 : 1);
  img.dataset.dy = (Math.random() * 0.7 + 0.3) * (Math.random() < 0.5 ? -1 : 1);
});

// Animation loop
function animateBubbles() {
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  images.forEach((img) => {
    let x = parseFloat(img.style.left);
    let y = parseFloat(img.style.top);
    let dx = parseFloat(img.dataset.dx);
    let dy = parseFloat(img.dataset.dy);

    x += dx;
    y += dy;

    // Bounce off walls dynamically
    if (x <= 0) {
      x = 0;
      dx = -dx;
    }
    if (x >= containerWidth - img.clientWidth) {
      x = containerWidth - img.clientWidth;
      dx = -dx;
    }

    if (y <= 0) {
      y = 0;
      dy = -dy;
    }
    if (y >= containerHeight - img.clientHeight) {
      y = containerHeight - img.clientHeight;
      dy = -dy;
    }

    img.style.left = x + "px";
    img.style.top = y + "px";
    img.dataset.dx = dx;
    img.dataset.dy = dy;
  });

  requestAnimationFrame(animateBubbles);
}

animateBubbles();

// =====================
// Handle Window Resize
// =====================
window.addEventListener("resize", () => {
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  images.forEach((img) => {
    let x = parseFloat(img.style.left);
    let y = parseFloat(img.style.top);

    if (x > containerWidth - img.clientWidth) {
      img.style.left = containerWidth - img.clientWidth + "px";
    }
    if (y > containerHeight - img.clientHeight) {
      img.style.top = containerHeight - img.clientHeight + "px";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-list a[href^='#']");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// toggle contact form part

const container1 = document.getElementById("container");
const showForm1 = document.getElementById("showForm1");
const showForm2 = document.getElementById("showForm2");

showForm2.addEventListener("click", () => {
  container1.classList.add("active");
});

showForm1.addEventListener("click", () => {
  container1.classList.remove("active");
});


// email sent part

 function handleFormSubmit(formId) {
    const form = document.getElementById(formId);

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          window.location.href = "thanks.html"; // ✅ success
        } else {
          window.location.href = "error.html"; // ❌ error
        }
      } catch (error) {
        window.location.href = "error.html"; // ❌ network error
      }
    });
  }

  // Apply logic to both forms
  handleFormSubmit("contact-form-1");
  handleFormSubmit("contact-form-2");


  // get in touch scroll to footer

  document.querySelectorAll('a[href="#contact"], a[href="#footer"]').forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("footer").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// dark mode light mode save progress to user