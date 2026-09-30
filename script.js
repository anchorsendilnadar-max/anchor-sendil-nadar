// Anchor Sendil Nadar — Main JavaScript
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const links = document.querySelector(".links");

  if (menu && links) {
    menu.addEventListener("click", () => {
      links.classList.toggle("mobile-open");
    });

    links.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => links.classList.remove("mobile-open"));
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
