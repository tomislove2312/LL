import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Header from "./components/Header/Header.js";
import Contact from "./components/Contact/Contact.js";
import Values from "./components/Values/Values.js";
import Blog from "./components/Blog/Blog.js";
//

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Values />
      <Blog />
      <Contact />
    </>
  );
}

export default App;
