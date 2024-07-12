import React from "react";

const Articles = () => (
  <section id="articles">
    <h2>Recent Articles</h2>
    <article data-category="philosophy">
      <header>
        <h3>The Eight Limbs of Yoga</h3>
        <p>
          Published on <time datetime="2024-06-01">June 1, 2024</time> by{" "}
          <a href="#author">Author Name</a>
        </p>
      </header>
      <p>
        An exploration of the eight limbs of yoga as outlined in the Yoga Sutras
        of Patanjali.
      </p>
      <footer>
        <a href="article1.html">Read more</a>
      </footer>
    </article>
    <article data-category="practices">
      <header>
        <h3>Understanding Pranayama</h3>
        <p>
          Published on <time datetime="2024-05-15">May 15, 2024</time> by{" "}
          <a href="#author">Author Name</a>
        </p>
      </header>
      <p>
        A deep dive into the practice of pranayama, the art of breath control.
      </p>
      <footer>
        <a href="article2.html">Read more</a>
      </footer>
    </article>
  </section>
);

export default Articles;
