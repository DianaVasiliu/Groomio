import React from "react";
import { StyleSheet, Platform } from "react-native";
import { Input, Text, View } from "native-base";

import { colors } from "../../theme";

const CustomTextInput = ({
    label,
    type = "text",
    onChangeText,
    value,
    startIconComponent,
    endIconComponent,
    style = {},
    required,
    ...other
}) => {
    return (
        <View style={[styles.container, style]}>
            {label && (
                <View style={styles.labelContainer}>
                    <Text style={styles.label} fontSize={14}>
                        {label}
                    </Text>
                    {required && (
                        <Text style={styles.required} fontSize={14}>
                            *
                        </Text>
                    )}
                </View>
            )}
            <View>
                <Input
                    variant="rounded"
                    placeholder={label}
                    type={type}
                    onChangeText={onChangeText}
                    InputLeftElement={startIconComponent}
                    InputRightElement={endIconComponent}
                    p={0}
                    height={"12"}
                    style={styles.input}
                    value={value}
                    placeholderTextColor={colors.grey[400]}
                    _focus={{ backgroundColor: colors.white }}
                    _input={{
                        selectionColor: colors.grey[400],
                        paddingLeft: startIconComponent ? 0 : 5,
                        paddingRight: 5,
                        fontSize: 16,
                    }}
                    {...other}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 1000,
    },
    input: {
        height: Platform.OS === "android" ? 40 : 50,
        color: colors.black,
    },
    label: {
        marginLeft: 15,
    },
    required: {
        color: colors.red,
    },
    labelContainer: {
        flexDirection: "row",
        gap: 4,
    },
});

export default CustomTextInput;
