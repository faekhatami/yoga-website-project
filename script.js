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

    // Destructuring form data
    const { name, email, message } = form.elements;

    if (
      name.value.trim() === "" ||
      email.value.trim() === "" ||
      message.value.trim() === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = {
      name: name.value.trim(),
      email: email.value.trim(),
      message: message.value.trim(),
    };

    console.log("Form Submitted!", formData);
    alert("Thank you for your message!");

    form.reset();
  });
});
