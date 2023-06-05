import React from "react";
import { ReactComponent as MenuLine } from "../../assets/menu-strawberry.svg";
import "./navbar.css";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);
  const [changeLanguage, setChangeLanguage] = React.useState(false);
  const { t } = useTranslation();
  return (
    <nav className="navigation">
      <div className="button_container">
        <a href="/" className="brand-name">
          LiquidLab
        </a>
        {changeLanguage ? (
          <button
            className="lang_button "
            onClick={() => {
              i18next.changeLanguage("hr");
              setChangeLanguage(!changeLanguage);
            }}
          >
            EN
          </button>
        ) : (
          <button
            className="lang_button "
            onClick={() => {
              i18next.changeLanguage("en");
              setChangeLanguage(!changeLanguage);
            }}
          >
            HR
          </button>
        )}
      </div>
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
            <a href="/home">{t("home")}</a>
          </li>
          <li>
            <a href="/about">{t("about")}</a>
          </li>
          <li>
            <a href="/contact">{t("contact")}</a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
