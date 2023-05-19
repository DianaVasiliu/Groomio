import React from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";

import { colors } from "../theme";

const SafeAreaScreen = ({ children }) => {
    return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});

export default SafeAreaScreen;
