const formContainer = document.getElementById("formContainer");
const form = document.getElementById("registerForm"); 
const inputs = form.querySelectorAll("input");
const leavesContainer = document.getElementById("leaves");
const successMessage = document.getElementById("successMessage");
const courses = document.getElementById("courses");
const bell = document.getElementById("bell");

let leafInterval;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add("error");
      valid = false;
      setTimeout(() => input.classList.remove("error"), 400);
    }
  });

  if (valid) {
    bell.style.animation = "ring 1.5s";
    setTimeout(() => bell.style.animation = "", 1500);

    formContainer.classList.add("hidden");

    launchLeaves();

    successMessage.textContent = "Registration successful!";

    successMessage.classList.add("show");

    setTimeout(() => {
      successMessage.classList.remove("show");
      courses.classList.add("visible");
      showCoursesStagger();
    }, 2500);
  }
});

function launchLeaves() {
  for (let i = 0; i < 10; i++) createLeaf();
  leafInterval = setInterval(createLeaf, 400);
}

function createLeaf() {
  const leaf = document.createElement("div");
  leaf.className = "leaf";
  leaf.textContent = Math.random() > 0.5 ? "🍁" : "🍂";
  leaf.style.left = Math.random() * 100 + "vw";
  const duration = 5 + Math.random() * 3;
  leaf.style.animationDuration = duration + "s";
  leavesContainer.appendChild(leaf);
  setTimeout(() => leaf.remove(), duration * 1000);
}

function showCoursesStagger() {
  const courseCards = courses.querySelectorAll(".course-card");
  courseCards.forEach((card, index) => {
    setTimeout(() => card.classList.add("show"), index * 300);
  });
}

function showCoursesStagger() {
  const courseCards = courses.querySelectorAll(".course-card");
  courseCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 500); 
  }, 2500);
}