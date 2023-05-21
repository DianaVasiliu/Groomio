import React, { useState } from "react";
import { StyleSheet, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View, Text } from "native-base";

import { colors } from "../../theme";
import { CalendarIcon } from "../icons";
import CustomButton from "./CustomButton";
import { formatDate } from "../../utils/functions";

const CustomDateTimePicker = ({ value, placeholder, onChange, required }) => {
    const [show, setShow] = useState(false);
    const isAndroid = Platform.OS === "android";

    const changeVal = (_, newVal) => {
        onChange(newVal);
    };

    return (
        <View style={styles.container}>
            <>
                <View style={styles.labelContainer}>
                    <Text style={styles.pickerLabel} fontSize={14}>
                        {placeholder}
                    </Text>
                    {required && (
                        <Text style={styles.required} fontSize={14}>
                            *
                        </Text>
                    )}
                </View>
                {isAndroid && (
                    <CustomButton
                        onPress={() => setShow(true)}
                        text={value ? formatDate(value) : placeholder}
                        textStyle={styles.buttonText}
                        style={styles.button}
                        leftIcon={
                            <CalendarIcon size={22} color={colors.grey[600]} />
                        }
                    />
                )}
            </>

            {(show || !isAndroid) && (
                <DateTimePicker
                    display="calendar"
                    value={value ?? new Date()}
                    mode="date"
                    is24Hour={true}
                    onChange={(e, val) => {
                        setShow(false);
                        changeVal(e, val);
                    }}
                    style={styles.picker}
                    maximumDate={new Date()}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    picker: {
        backgroundColor: colors.white,
        height: Platform.OS === "android" ? 40 : 50,
    },
    pickerLabel: {
        alignSelf: "flex-end",
    },
    label: {
        alignSelf: "flex-end",
        marginLeft: 15,
    },
    buttonText: {
        color: colors.black,
    },
    button: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.grey[600],
        flex: 1,
    },
    required: {
        color: colors.red,
    },
    labelContainer: {
        flexDirection: "row",
        gap: 4,
        justifyContent: "flex-end",
    },
});

export default CustomDateTimePicker;
