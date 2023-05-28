import { FlatList, Text } from "native-base";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../theme";
import { CheckIcon } from "../icons";

const MapTabs = ({ tabs, selectedTabs, onSelect }) => {
    return (
        <View style={styles.parentContainer}>
            <FlatList
                data={tabs}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.container}
                contentContainerStyle={styles.itemsContainer}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={styles.tabContainer}
                            onPress={() => onSelect(item.type)}>
                            <Text style={styles.tabText} fontSize={16}>
                                {item.name}
                            </Text>
                            {selectedTabs[item.type] && (
                                <View style={styles.checkIconContainer}>
                                    <CheckIcon
                                        color={colors.secondary[600]}
                                        size={20}
                                    />
                                </View>
                            )}
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    parentContainer: {
        minHeight: 40,
    },
    container: {
        flex: 1,
    },
    itemsContainer: {
        gap: 10,
        paddingHorizontal: 10,
    },
    checkIconContainer: {
        backgroundColor: colors.white,
        borderRadius: 100,
        padding: 2,
        aspectRatio: 1,
    },
    tabContainer: {
        padding: 7,
        paddingHorizontal: 20,
        backgroundColor: colors.primary[400],
        borderRadius: 100,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
    tabText: {
        color: colors.white,
        fontWeight: "bold",
    },
});

export default MapTabs;
