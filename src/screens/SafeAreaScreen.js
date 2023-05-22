import React from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import { ScrollView } from "native-base";

import { colors } from "../theme";

const SafeAreaScreen = React.forwardRef(({ children, ...otherProps }, ref) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                ref={ref}
                onScroll={otherProps.onScroll ?? undefined}
                scrollEventThrottle={80}>
                {children}
            </ScrollView>
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});

export default SafeAreaScreen;
