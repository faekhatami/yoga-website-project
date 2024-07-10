import React, { useEffect } from "react";

const Categories = () => {
  useEffect(() => {
    const categories = ["Philosophy", "Practices", "Meditation", "Wellness"];
    const categoryList = document.getElementById("category-list");

    const categoryItems = categories.map((category) => {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.href = `#${category.toLowerCase()}`;
      a.textContent = category;
      li.appendChild(a);
      return li;
    });

    categoryList.append(...categoryItems);

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

    categoryList.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        event.preventDefault();
        const selectedCategory = event.target.textContent.toLowerCase();
        filterArticles(selectedCategory);
      }
    });
  }, []);

  return (
    <section id="categories">
      <h2>Categories</h2>
      <ul id="category-list">{}</ul>
    </section>
  );
};

export default Categories;
