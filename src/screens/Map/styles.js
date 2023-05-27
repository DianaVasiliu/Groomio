import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export const styles = StyleSheet.create({
    mapViewContainer: {
        borderRadius: 10,
        overflow: "hidden",
        margin: 10,
        flex: 1,
    },
    mapView: {
        flex: 1,
    },
    directionsButtonContainer: {
        padding: 10,
        backgroundColor: colors.primary[400],
        borderRadius: 100,
    },
    callout: {
        borderRadius: 15,
        overflow: "hidden",
        backgroundColor: colors.white,
        padding: 10,
    },
    calloutContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 30,
    },
    placeTitle: {
        fontWeight: "bold",
        maxWidth: 200,
        flex: 1,
        flexWrap: "wrap",
    },
    placeTitleContainer: {},
    placeRating: {},
    placeType: {
        color: colors.grey[900],
        fontStyle: "italic",
    },
    placeRatingContainer: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
    },
});
