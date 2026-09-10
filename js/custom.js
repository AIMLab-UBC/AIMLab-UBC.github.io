document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-navigation");
  if (!header || !toggle || !navigation) return;

  // Keep all navigation links available if JavaScript is disabled.
  toggle.hidden = false;
  header.classList.add("has-menu");

  function closeMenu(returnFocus) {
    toggle.setAttribute("aria-expanded", "false");
    header.classList.remove("menu-open");
    if (returnFocus) toggle.focus();
  }

  toggle.addEventListener("click", function () {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    header.classList.toggle("menu-open", !isOpen);
  });
  header.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") closeMenu(true);
  });
  document.addEventListener("click", function (event) {
    if (!header.contains(event.target)) closeMenu(false);
  });
  header.addEventListener("focusout", function (event) {
    if (!header.contains(event.relatedTarget)) closeMenu(false);
  });
  navigation.addEventListener("click", function (event) {
    if (event.target.closest("a")) closeMenu(false);
  });
  window.matchMedia("(min-width: 68rem)").addEventListener("change", function () { closeMenu(false); });
});
