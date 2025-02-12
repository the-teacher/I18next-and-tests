import { useTranslation } from "react-i18next";

export const Hello = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{t("Hello World")}</h1>
      <button
        onClick={toggleLanguage}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Switch to {i18n.language === "en" ? "Russian" : "English"}
      </button>
    </div>
  );
};
