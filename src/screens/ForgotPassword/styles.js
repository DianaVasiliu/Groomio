import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    logo: {
        maxWidth: 70,
        maxHeight: 70,
    },

    title: {
        marginTop: 10,
        marginBottom: 100,
        color: "#151515",
        fontWeight: 700,
        fontSize: 32,
    },

    inputContainer: { width: "90%" },

    input: {},

    buttonContainer: {
        width: "100%",
        justifyContent: "center",
        marginTop: 40,
    },

    button: {
        width: "90%",
        backgroundColor: "#A3C7F1",
        padding: 15,
        borderRadius: 100,
        alignSelf: "center",
        alignItems: "center",
    },

    buttonOutline: {
        backgroundColor: "white",
        marginTop: 5,
        borderColor: "#A3C7F1",
        borderWidth: 2,
    },

    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    },

    buttonOutlineText: {
        color: "#A3C7F1",
        fontWeight: "700",
        fontSize: 16,
    },
});
