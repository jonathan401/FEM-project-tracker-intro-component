const toggleBtn = document.querySelector("#toggle_btn");
const burger = document.querySelector("#toggle_btn img");
const navLinks = document.querySelector("#nav-links");

toggleBtn.addEventListener("click", () => {
  let expanded = toggleBtn.getAttribute("aria-expanded") === "true";
  if (expanded) {
    expanded = false;
  } else {
    expanded = true;
  }

  toggleBtn.setAttribute("aria-expanded", expanded);
  navLinks.classList.toggle("open");
});
