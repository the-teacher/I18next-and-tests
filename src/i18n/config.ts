import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

const defaultLanguage = import.meta.env.VITE_DEFAULT_LANGUAGE || "en";

i18n.use(initReactI18next).init({
  fallbackLng: defaultLanguage,
  lng: defaultLanguage,
  resources: {
    en,
    ru,
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["en", "ru"];

export default i18n;
