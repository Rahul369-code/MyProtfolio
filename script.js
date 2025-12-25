/* ================= TYPING EFFECT (HERO) ================= */
const text = ["Rahul", "a Developer", "a Designer"];
let index = 0, char = 0;
const typing = document.getElementById("typing");

function typeEffect() {
  if (char < text[index].length) {
    typing.textContent += text[index].charAt(char);
    char++;
    setTimeout(typeEffect, 120);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (char > 0) {
    typing.textContent = text[index].substring(0, char - 1);
    char--;
    setTimeout(eraseEffect, 80);
  } else {
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 300);
  }
}

typeEffect();

/* ================= SMOOTH SCROLL ================= */
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* ================= THEME TOGGLE ================= */
function toggleTheme() {
  document.body.classList.toggle("light");
}

/* ================= MOBILE MENU ================= */
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

/* ================= SCROLL REVEAL ================= */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

/* ================= SKILL TYPING ================= */
const skills = [
  "HTML & CSS",
  "JavaScript",
  "Java Programming",
  "SQL & Databases",
  "Frontend Development",
  "UI Designing"
];

let sIndex = 0, sChar = 0;
const skillTyping = document.getElementById("skill-typing");

function typeSkill() {
  if (sChar < skills[sIndex].length) {
    skillTyping.textContent += skills[sIndex].charAt(sChar);
    sChar++;
    setTimeout(typeSkill, 100);
  } else {
    setTimeout(eraseSkill, 1500);
  }
}

function eraseSkill() {
  if (sChar > 0) {
    skillTyping.textContent =
      skills[sIndex].substring(0, sChar - 1);
    sChar--;
    setTimeout(eraseSkill, 60);
  } else {
    sIndex = (sIndex + 1) % skills.length;
    setTimeout(typeSkill, 400);
  }
}

typeSkill();

/* ================= PROJECT MODAL ================= */
const modal = document.getElementById("projectModal");
const modalContent = document.querySelector(".modal-content");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {

    document.getElementById("modalImg").src = card.dataset.img;
    document.getElementById("modalTitle").innerText = card.dataset.title;
    document.getElementById("modalDesc").innerText = card.dataset.desc;

    // Tech stack list
    const techUl = document.getElementById("modalTech");
    techUl.innerHTML = "";

    card.dataset.tech.split(",").forEach(tech => {
      const li = document.createElement("li");
      li.textContent = tech.trim();
      techUl.appendChild(li);
    });

    // Links
    document.getElementById("githubLink").href = card.dataset.github;
    document.getElementById("liveLink").href = card.dataset.live;

    modal.style.display = "flex";
  });
});

/* Close Modal */
function closeModal() {
  modal.style.display = "none";
}

/* Close when clicking outside modal */
modal.addEventListener("click", (e) => {
  if (!modalContent.contains(e.target)) {
    closeModal();
  }
});

/* Close on ESC key */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

/* ================= CURSOR GLOW ================= */
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
