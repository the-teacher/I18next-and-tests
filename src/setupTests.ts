/// <reference types="@testing-library/jest-dom" />
/// <reference types="@testing-library/dom" />

import "@testing-library/jest-dom";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const i18n = i18next.createInstance();

// Initialize i18n for tests
i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  ns: ["translations"],
  defaultNS: "translations",
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
});

export default i18n;
