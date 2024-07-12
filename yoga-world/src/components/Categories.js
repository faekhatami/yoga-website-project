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
  }, []);

  return (
    <section id="categories">
      <h2>Categories</h2>
      <ul id="category-list"></ul>
    </section>
  );
};

export default Categories;
