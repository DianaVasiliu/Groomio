import { FlatList, Text } from "native-base";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../theme";
import { CheckIcon } from "../icons";

const MapTabs = ({ tabs, selectedTabs, onSelect }) => {
    return (
        <View>
            <FlatList
                data={tabs}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.container}
                contentContainerStyle={styles.itemsContainer}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            style={styles.tabContainer}
                            onPress={() => onSelect(index)}>
                            <Text>{item}</Text>
                            {selectedTabs[index] && <CheckIcon />}
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemsContainer: {
        gap: 10,
        paddingHorizontal: 10,
    },
    tabContainer: {
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor: colors.primary[400],
        borderRadius: 100,
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
    },
});

export default MapTabs;
