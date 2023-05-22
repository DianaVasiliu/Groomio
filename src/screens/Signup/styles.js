import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    inputContainer: { width: "90%", gap: 10 },

    input: {},

    buttonContainer: {
        width: "90%",
        justifyContent: "center",
        marginTop: 40,
    },

    button: {
        width: "100%",
        backgroundColor: "#A3C7F1",
        padding: 15,
        borderRadius: 100,
        alignItems: "center",
        alignSelf: "center",
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
        color: "#0782F9",
        fontWeight: "700",
        fontSize: 16,
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

    simpleButtonText: {
        color: "#A3C7F1",
        fontWeight: "700",
        fontSize: 16,
        marginTop: 5,
        alignSelf: "flex-end",
    },

    simpleText: {
        color: "black",
        fontWeight: 500,
        fontSize: 14,
        marginTop: 35,
        textAlign: "center",
    },
});
