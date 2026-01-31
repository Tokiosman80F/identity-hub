const toggle = document.getElementById("navbarToggle");
const menu = document.getElementById("navbarMenu");

toggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", isOpen);
});
