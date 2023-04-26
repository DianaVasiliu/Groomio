import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import roTranslation from "./ro.json";

const resources = {
    ro: {
        translation: roTranslation,
    },
};

i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    fallbackLng: "ro",
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
});

export default i18n;
