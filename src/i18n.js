import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./langs/en.json";
import translationAR from "./langs/ar.json";

const resources = {
  ar: {
    translation: translationAR,
  },
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});
