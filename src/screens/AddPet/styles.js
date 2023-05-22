import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        paddingHorizontal: 20,
    },
    categoryText: {
        fontWeight: "bold",
        color: colors.black,
        paddingLeft: 20,
        marginBottom: 10,
    },
    formContainer: {
        gap: 20,
    },
    submitButton: {
        marginHorizontal: 20,
        marginTop: 50,
    },
    required: {
        color: colors.red,
    },
    labelContainer: {
        flexDirection: "row",
        gap: 4,
    },
    errorText: {
        color: colors.red,
    },
});
