console.log("JavaScript is loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a");
  const toggleActiveClass = (event) => {
    navLinks.forEach((link) => link.classList.remove("active"));
    event.target.classList.add("active");
    event.stopPropagation();
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", toggleActiveClass);
  });

  document.addEventListener("click", () => {
    navLinks.forEach((link) => link.classList.remove("active"));
  });
});
