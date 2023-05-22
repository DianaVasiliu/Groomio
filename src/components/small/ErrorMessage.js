import React from "react";
import { Text } from "native-base";
import { StyleSheet } from "react-native";

import { colors } from "../../theme";

const ErrorMessage = ({ text, style = {} }) => {
    return text ? <Text style={[styles.text, style]}>{text}</Text> : <></>;
};

const styles = StyleSheet.create({
    text: {
        color: colors.red,
        marginLeft: 15,
    },
});

export default ErrorMessage;
