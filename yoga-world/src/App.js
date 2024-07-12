import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Articles from "./components/Articles";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ApiData from "./components/ApiData";
import "./styles.scss";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Articles />
        <Categories />
        <Contact />
        <ApiData />
      </main>
      <Footer />
    </div>
  );
};

export default App;
