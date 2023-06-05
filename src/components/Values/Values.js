import React from "react";
import "./values.css";
import Bartender from "../../assets/bartender.jpeg";
import { useTranslation } from "react-i18next";

function Values() {
  const { t } = useTranslation();
  return (
    <div>
      <img src={Bartender} className="bartender" />
      <div className="our_values">
        <h2>{t("values")}</h2>
      </div>
      <div className="values">
        <div className="value">
          <h3>{t("innovation")}</h3>
          <p>{t("lifeline")}</p>
        </div>
        <div className="value">
          <h3>{t("creativity")}</h3>
          <p>{t("spark")}</p>
        </div>
        <div className="value">
          <h3>{t("collaboration")}</h3>
          <p>{t("cornerstone")}</p>
        </div>
      </div>
    </div>
  );
}

export default Values;
