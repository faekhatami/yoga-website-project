import React from "react";
import Home from "./Home";
import About from "./About";
import Articles from "./Articles";
import Categories from ".Categories";
import Contact from "./Contact";
import ApiData from "./ApiData";

const Main = () => {
  return (
    <main>
      <Home />
      <About />
      <Articles />
      <Categories />
      <Contact />
      <ApiData />
    </main>
  );
};

export default Main;
