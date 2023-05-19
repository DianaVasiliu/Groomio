import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export const styles = StyleSheet.create({
    bgImage: {
        width: "100%",
        height: 200,
        zIndex: 1,
    },
    imageContainer: {
        position: "relative",
        marginTop: -30,
    },
    decoration: {
        position: "absolute",
        backgroundColor: colors.white,
        height: 35,
        width: "100%",
        zIndex: 2,
    },
    bottomDecoration: {
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    topDecoration: {
        top: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    searchContainer: {
        zIndex: 2,
        width: "100%",
        position: "absolute",
        top: 0,
        bottom: 0,
        marginVertical: "auto",
        marginHorizontal: 0,
        justifyContent: "center",
        paddingHorizontal: 20,
        gap: 10,
    },
    searchText: {
        color: colors.white,
        fontWeight: "bold",
    },
    searchIconContainer: {
        paddingHorizontal: 20,
    },
    searchPlaceholder: {
        color: colors.grey[400],
    },
    categoriesText: {
        marginHorizontal: 20,
        fontWeight: "bold",
        color: colors.black,
        marginBottom: 10,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        zIndex: 3,
    },
});
