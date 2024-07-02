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

  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    console.log("Form Submitted!", formData);
    alert("Thank you for your message!");

    form.reset();
  });
});
