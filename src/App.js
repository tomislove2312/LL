import React, { FC, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Header from "./components/Header/Header.js";
import Contact from "./components/Contact/Contact.js";
import Values from "./components/Values/Values.js";
import Blog from "./components/Blog/Blog.js";
import Footer from "./components/Footer/Footer.js";
//

function App() {
  return (
    <Suspense fallback={null}>
      <Navbar />
      <Header />
      <Values />
      <Blog />
      <Contact />
      <Footer />
    </Suspense>
  );
}

export default App;
