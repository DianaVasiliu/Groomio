import React from "react";
import { StyleSheet } from "react-native";
import { Select, Text, View } from "native-base";

import { CheckIcon, DownArrowIcon } from "../icons";
import { colors } from "../../theme";

const CustomSelect = ({
    items,
    selectedValue,
    onValueChange,
    placeholder,
    label,
    required,
    style = {},
}) => {
    const selected = selectedValue ?? items[0].value;

    return (
        <View style={style}>
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
            <Select
                variant="rounded"
                defaultValue={items[0].value}
                placeholder={placeholder}
                selectedValue={selected}
                onValueChange={onValueChange}
                style={styles.container}
                height={"12"}
                dropdownIcon={
                    <View style={styles.selectArrowContainer}>
                        <DownArrowIcon />
                    </View>
                }
                _selectedItem={{
                    endIcon: <CheckIcon size={24} color={colors.grey[700]} />,
                }}>
                {items.map((item, i) => {
                    return (
                        <Select.Item
                            key={i}
                            value={item.value}
                            label={item.label}
                            leftIcon={item.leftIcon}
                        />
                    );
                })}
            </Select>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginLeft: 10,
        fontSize: 16,
    },
    selectArrowContainer: {
        padding: 0,
        paddingVertical: 10,
        paddingRight: 10,
        backgroundColor: colors.white,
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

export default CustomSelect;
