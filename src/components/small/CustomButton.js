import React from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "native-base";
import { colors } from "../../theme";

const CustomButton = ({
    text,
    onPress,
    leftIcon,
    style = {},
    textStyle = {},
}) => {
    return (
        <Button
            borderRadius="full"
            variant="custom"
            _pressed={{ style: { ...styles.buttonFocus, ...style } }}
            _focus={{ style: { ...styles.buttonFocus, ...style } }}
            style={{ ...styles.button, ...style }}
            onPress={onPress}
            fontSize={22}
            leftIcon={leftIcon}>
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </Button>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary[400],
    },
    buttonFocus: {
        backgroundColor: colors.primary[900],
    },
    text: {
        fontWeight: "bold",
        color: colors.white,
        fontSize: 16,
        marginLeft: 5,
    },
});

export default CustomButton;
