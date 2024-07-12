import React from "react";
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
