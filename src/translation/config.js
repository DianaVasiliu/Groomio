import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json";

const resources = {
    en: {
        translation: enTranslation,
    },
};

i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
});

export default i18n;
