import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

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
        width: 30,
        height: 30,
    },
    heading: {
        flex: 1,
        fontSize: 30,
        textAlign: "left",
        marginLeft: 10,
    },
    profileContainer: {
        backgroundColor: "#f2f2f2",
        padding: 15,
        marginBottom: 20,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 20,
    },
    avatarContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginLeft: 15,
    },
    profileText: {
        marginLeft: 20,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    logoutButton: {
        marginLeft: "auto",
        marginRight: 10,
    },
    logoutIcon: {
        width: 30,
        height: 30,
    },
    subheading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 8,
        padding: 16,
    },
    buttonContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    buttonIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    buttonText: {
        fontSize: 18,
        textAlign: "right",
    },
    arrowIcon: {
        width: 24,
        height: 24,
    },
    circle: {
        padding: 8,
        borderRadius: 30,
        backgroundColor: "#f2f2f2",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },
    circleIcon: {
        width: 18,
        height: 18,
    },

    headercircle: {
        padding: 5,
        borderRadius: 30,
        backgroundColor: "#f2f2f2",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        marginLeft: 20,
    },

    headerCircleIcon: {
        width: 30,
        height: 30,
    },
});
