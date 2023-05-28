import { extendTheme } from "native-base";

export const colors = {
    primary: {
        100: "#cde4ff",
        200: "#cde4ff",
        300: "#cde4ff",
        400: "#A3C7F1",
        500: "#A3C7F1",
        600: "#A3C7F1",
        700: "#679DDB",
        800: "#679DDB",
        900: "#679DDB",
    },
    secondary: {
        100: "#FFAF8D",
        200: "#FFAF8D",
        300: "#FFAF8D",
        400: "#ED865A",
        500: "#ED865A",
        600: "#ED865A",
        700: "#CD6234",
        800: "#CD6234",
        900: "#CD6234",
    },
    white: "#FFFFFF",
    black: "#151515",
    grey: {
        100: "#EEEEEE",
        200: "#EEEEEE",
        300: "#EEEEEE",
        400: "#CACACA",
        500: "#CACACA",
        600: "#CACACA",
        700: "#555555",
        800: "#555555",
        900: "#555555",
        transparent: "#777777aa",
    },
    transparent: "transparent",
    pink: "#ED91C4",
    blue: "#69B4E0",
    red: "#F54842",
    yellow: "#FFD414",
};

const theme = extendTheme({
    colors,
});

export default theme;
