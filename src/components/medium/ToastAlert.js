import React from "react";
import { StyleSheet } from "react-native";
import { Alert, HStack, Text, VStack } from "native-base";
import { colors } from "../../theme";

const ToastAlert = ({ status, title, description, ...rest }) => (
    <Alert
        style={styles.alert}
        status={status ? status : "info"}
        variant="subtle"
        {...rest}>
        <VStack space={1} flexShrink={1} w="100%">
            <HStack style={styles.stackContainer} space={2}>
                <HStack style={styles.stackContainer} space={2}>
                    <Alert.Icon />
                    <Text style={styles.titleText} fontSize="md">
                        {title}
                    </Text>
                </HStack>
            </HStack>
            {description && (
                <Text style={styles.descriptionText}>{description}</Text>
            )}
        </VStack>
    </Alert>
);

const styles = StyleSheet.create({
    alert: {
        maxWidth: "90%",
        alignSelf: "center",
        flexDirection: "row",
    },
    stackContainer: {
        flexShrink: 1,
        alignItems: "center",
        justifyContent: "space-between",
    },
    titleText: {
        fontWeight: "bold",
        flexShrink: 1,
        color: colors.black,
    },
    descriptionText: {
        paddingHorizontal: 6,
        color: colors.black,
    },
});

export default ToastAlert;
