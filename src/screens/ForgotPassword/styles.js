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

    inputContainer: { width: "80%" },

    input: {
        backgroundColor: "#EEEEEE",
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 20,
        marginTop: 15,
    },

    buttonContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },

    button: {
        width: "100%",
        backgroundColor: "#A3C7F1",
        padding: 15,
        borderRadius: 10,
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
