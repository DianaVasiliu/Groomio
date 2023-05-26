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

    simpleText: {
        color: "black",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        alignItems: "center",
    },

    dontHaveAccountContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        marginTop: 20,
    },

    inputContainer: { width: "90%", gap: 10 },

    input: {
        backgroundColor: "white",
    },

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
        color: "#A3C7F1",
        fontWeight: "700",
        fontSize: 16,
    },

    simpleButtonText: {
        color: "#A3C7F1",
        fontWeight: "700",
        fontSize: 16,
        alignSelf: "flex-end",
    },
});
