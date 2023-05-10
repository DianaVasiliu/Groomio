import { extendTheme } from "native-base";

export const colors = {
    primary: {
        100: "#45ada8",
        200: "#45ada8",
        300: "#45ada8",
        400: "#137873",
        500: "#137873",
        600: "#137873",
        700: "#035450",
        800: "#035450",
        900: "#035450",
    },
};

const theme = extendTheme({
    colors,
});

export default theme;
