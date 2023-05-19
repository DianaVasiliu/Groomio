import React from "react";
import { StyleSheet } from "react-native";
import { Input, View } from "native-base";

import { colors } from "../../theme";

const CustomTextInput = ({
    placeholder,
    type = "text",
    startIconComponent,
    endIconComponent,
}) => {
    return (
        <View style={styles.container}>
            <Input
                variant="rounded"
                placeholder={placeholder}
                type={type}
                InputLeftElement={startIconComponent}
                InputRightElement={endIconComponent}
                p={0}
                size={"xl"}
                style={styles.input}
                placeholderTextColor={colors.grey[400]}
                _focus={{
                    borderColor: colors.transparent,
                    backgroundColor: colors.transparent,
                }}
                _input={{
                    selectionColor: colors.grey[400],
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        width: "100%",
        borderRadius: 1000,
    },
    input: {
        height: 50,
        color: colors.black,
    },
});

export default CustomTextInput;
