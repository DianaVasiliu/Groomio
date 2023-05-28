import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    backIcon: {
        marginLeft: 20,
        width: 30,
        height: 30,
    },
    heading: {
        flex: 1,
        fontSize: 30,
        textAlign: "left",
        marginLeft: 10,
    },
    circle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#f2f2f2",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        marginLeft: 20,
    },
    circleIcon: {
        width: 30,
        height: 30,
    },

    inputContainer: {
        width: "80%",
        gap: 10,
        alignSelf: "center",
    },

    input: {
        backgroundColor: "white",
    },
    subheading: {
        marginTop: 20,
        fontSize: 20,
    },

    buttonContainer: {
        width: "80%",
        alignSelf: "center",
        marginTop: 80,
    },

    button: {
        width: "100%",
        backgroundColor: "#A3C7F1",
        padding: 15,
        borderRadius: 100,
        alignItems: "center",
        alignSelf: "center",
    },

    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    },
});
