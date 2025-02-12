import { useTranslation } from "react-i18next";
import "../styles/Button.scss";

export const Hello = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{t("Hello World")}</h1>
      <button onClick={toggleLanguage} className="button">
        Switch to {i18n.language === "en" ? "Russian" : "English"}
      </button>
    </div>
  );
};
