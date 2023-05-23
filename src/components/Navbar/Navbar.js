import React from "react";
import { ReactComponent as MenuLine } from "../../assets/menu-strawberry.svg";
import "./navbar.css";
const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        LiquidLab
      </a>

      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <MenuLine />
      </button>
      <nav
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
