import React from "react";
import "./header.css";
import Lab from "../CocktailLab/Lab.js";
// import CocktailLab from "../../assets/cocktailAccent.svg";
function Header() {
  return (
    <div className="container">
      <div className="lab_bg">
        <object>
          <Lab />
        </object>
      </div>
      <header>
        <div className="header_text">
          <h2 className="welcome">Welcome to</h2>
          <div className="h1_animation">
            <h1>LiquidLab</h1>
            <h1>LiquidLab</h1>
          </div>
          <h3 className="premier_bar">
            The premier bar consulting firm that helps you take your bar to the
            next level!
          </h3>
          <p className="header_p">
            We specialize in creating unique and unforgettable bar experiences,
            we know that every bar is unique. That’s why we take a customized
            approach to every project, tailoring our services to meet your
            specific needs and goals. Whether you’re looking to create a
            signature cocktail menu, improve your bar’s efficiency or design a
            completely new stunning menu.
          </p>
        </div>
      </header>
    </div>
  );
}

export default Header;
