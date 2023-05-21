import { StyleSheet } from "react-native";
import { colors } from "../../../theme";

export const carouselStyles = StyleSheet.create({
    container: {
        width: "100%",
        height: 450,
    },
    listContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    card: {
        position: "absolute",
    },
});

export const carouselItemStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 20,
        shadowColor: colors.grey[900],
        shadowOffset: { height: 5, width: 0 },
        shadowRadius: 5,
    },
    image: {
        height: 250,
        width: "100%",
        borderRadius: 20,
    },
    detailsContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 5,
    },
    indexIndicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15,
    },
    indexIndicator: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: colors.primary[400],
    },
    indicatorText: {
        color: colors.white,
        fontWeight: "bold",
    },
    ofText: {
        color: colors.grey[400],
        paddingHorizontal: 10,
    },
    nameText: { fontWeight: "bold" },
    breedText: { color: colors.grey[700] },
});
