// Part 2: Functions & Scope
let animationCount = 0;

// Function with parameter + return value
function addNumbers(a, b) {
  return a + b;
}

// Function showing scope difference
function showScope() {
  let localVar = "I'm local!";
  console.log(localVar);
}
// Part 3: Combining JS + CSS
// Animate box on button click
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("box");

animateBtn.addEventListener("click", () => {
  box.classList.toggle("move");

  animationCount++;
  console.log("Animation triggered " + animationCount + " times");
});

// Modal Control
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
  modal.style.display = "block"; // show modal
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none"; // hide modal
});
