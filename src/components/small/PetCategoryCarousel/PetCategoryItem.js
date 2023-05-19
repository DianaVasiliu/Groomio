import React from "react";
import { StyleSheet, Platform } from "react-native";
import { Image, Pressable, Text, View } from "native-base";

import { colors } from "../../../theme";

const PetCategoryItem = ({ image, name, onPress = () => {} }) => {
    return (
        <View>
            <Pressable style={styles.container} onPress={onPress}>
                <Image source={image} alt="Item" style={styles.image} />
            </Pressable>
            <Text style={styles.text}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary[300],
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    image: {
        height: Platform.OS === "android" ? 40 : 50,
        width: Platform.OS === "android" ? 40 : 50,
    },
    text: {
        textAlign: "center",
        color: colors.black,
    },
});

export default PetCategoryItem;
