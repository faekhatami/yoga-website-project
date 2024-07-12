import React from "react";
import ContactForm from "./ContactForm";
import ApiData from "./ApiData";

const Main = () => {
  return (
    <main>
      <section id="home">
        <h2>Welcome to the World of Yoga</h2>
        <p>Explore the depths of yoga philosophy, practice, and wisdom.</p>
      </section>

      <section id="about">
        <h2>About This Blog</h2>
        <p>
          Learn more about the mission of this blog and the author behind it.
        </p>
      </section>

      <section id="articles">
        <h2>Recent Articles</h2>
        <article data-category="philosophy">
          <header>
            <h3>The Eight Limbs of Yoga</h3>
            <p>
              Published on <time dateTime="2024-06-01">June 1, 2024</time> by{" "}
              <a href="#author">Author Name</a>
            </p>
          </header>
          <p>
            An exploration of the eight limbs of yoga as outlined in the Yoga
            Sutras of Patanjali.
          </p>
          <footer>
            <a href="article1.html">Read more</a>
          </footer>
        </article>
        <article data-category="practices">
          <header>
            <h3>Understanding Pranayama</h3>
            <p>
              Published on <time dateTime="2024-05-15">May 15, 2024</time> by{" "}
              <a href="#author">Author Name</a>
            </p>
          </header>
          <p>
            A deep dive into the practice of pranayama, the art of breath
            control.
          </p>
          <footer>
            <a href="article2.html">Read more</a>
          </footer>
        </article>
      </section>

      <section id="categories">
        <h2>Categories</h2>
        <ul id="category-list">
          <li>
            <a href="#philosophy">Philosophy</a>
          </li>
          <li>
            <a href="#practices">Practices</a>
          </li>
          <li>
            <a href="#meditation">Meditation</a>
          </li>
          <li>
            <a href="#wellness">Wellness</a>
          </li>
        </ul>
      </section>

      <ContactForm />
      <ApiData />
    </main>
  );
};

export default Main;
