import React from "react";
import { StyleSheet, Platform } from "react-native";
import { Pressable, Text, View } from "native-base";
import { Image } from "expo-image";

import { colors } from "../../../theme";

const PetCategoryItem = ({ item, selected, onPress = () => {} }) => {
    const { image, name, type } = item;
    const isSelected = type === selected;

    return (
        <View>
            <Pressable
                style={[styles.container, isSelected ? styles.selected : {}]}
                onPress={onPress}>
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
    selected: {
        backgroundColor: colors.primary[900],
    },
});

export default PetCategoryItem;
