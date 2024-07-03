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

  // Dynamically display categories using the spread operator
  const categories = ["Philosophy", "Practices", "Meditation", "Wellness"];
  const categoryList = document.getElementById("category-list");

  // Create category items
  const categoryItems = categories.map((category) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = `#${category.toLowerCase()}`;
    a.textContent = category;
    li.appendChild(a);
    return li;
  });

  // Append category items to the category list using the spread operator
  categoryList.append(...categoryItems);

  // Function to filter articles based on selected categories
  const filterArticles = (...selectedCategories) => {
    const articles = document.querySelectorAll("article");
    articles.forEach((article) => {
      const articleCategory = article.getAttribute("data-category");
      if (selectedCategories.includes(articleCategory)) {
        article.style.display = "block";
      } else {
        article.style.display = "none";
      }
    });
  };

  // Add event listeners to category links for filtering
  categoryList.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const selectedCategory = event.target.textContent.toLowerCase();
      filterArticles(selectedCategory);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const dataContainer = document.getElementById("data-container");
  const fetchDataBtn = document.getElementById("fetch-data-btn");

  const fetchDataUsingAsyncAwait = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      displayData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const displayData = (data) => {
    dataContainer.innerHTML = ""; // Clear previous data
    data.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("data-item");
      div.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      `;
      dataContainer.appendChild(div);
    });
  };

  fetchDataBtn.addEventListener("click", fetchDataUsingAsyncAwait);
});
