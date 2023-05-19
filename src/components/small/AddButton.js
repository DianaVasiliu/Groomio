import React from "react";
import { StyleSheet } from "react-native";
import { Pressable } from "native-base";

import { PlusIcon } from "../icons";
import { colors } from "../../theme";

const AddButton = ({ onPress }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <PlusIcon color={colors.white} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary[400],
        padding: 8,
        borderRadius: 100,
    },
});

export default AddButton;
