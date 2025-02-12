import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    en: {
      translations: {
        "Hello World": "Hello World",
      },
    },
    ru: {
      translations: {
        "Hello World": "Привет Мир",
      },
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["en", "ru"];

export default i18n;
