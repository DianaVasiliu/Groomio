import React from "react";
import { StyleSheet, Platform } from "react-native";
import { Pressable, Text, View } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { colors } from "../../theme";
import { BackArrowIcon } from "../icons";

const ScreenTitle = ({ title, hasBackButton }) => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {hasBackButton && (
                <Pressable onPress={goBack} style={styles.backButton}>
                    <BackArrowIcon color={colors.primary[800]} size={26} />
                </Pressable>
            )}
            <Text
                style={styles.title}
                fontSize={Platform.OS === "android" ? "2xl" : "3xl"}>
                {title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        paddingLeft: 30,
        paddingVertical: 15,
    },
    backButton: {
        width: 45,
        height: 45,
        backgroundColor: colors.grey[100],
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {},
});

export default ScreenTitle;
