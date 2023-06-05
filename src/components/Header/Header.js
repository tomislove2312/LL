import React from "react";
import "./header.css";
import Lab from "../CocktailLab/Lab.js";
import { useTranslation } from "react-i18next";
// import CocktailLab from "../../assets/cocktailAccent.svg";
function Header() {
  const { t } = useTranslation();
  return (
    <div className="container">
      {/* <div className="lab_bg"><Lab /></div> */}
      <header>
        <div className="header_text">
          <h2 className="welcome">{t("welcome")}</h2>
          <div className="h1_animation">
            <h1>LiquidLab</h1>
            <h1>LiquidLab</h1>
          </div>
          <h3 className="premier_bar">{t("premier_bar")}</h3>
          <p className="header_p">{t("we_specialize")}</p>
        </div>
      </header>
    </div>
  );
}

export default Header;
