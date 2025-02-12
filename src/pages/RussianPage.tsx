import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const RussianPage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("ru");
  }, [i18n]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{t("Hello World")}</h1>
    </div>
  );
};

export default RussianPage;
