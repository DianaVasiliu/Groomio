import React from "react";
import { StyleSheet } from "react-native";
import { View, FlatList } from "native-base";
import { useTranslation } from "react-i18next";

import { NotFound } from "../../small/animations";
import PetCarouselItem from "../PetCarousel/PetCarouselItem";

const PetGrid = ({ data }) => {
    const { t } = useTranslation();

    if (!data || data.length === 0) {
        return <NotFound text={t("no-pets-found")} />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                numColumns={1}
                keyExtractor={(_, i) => i.toString()}
                scrollEnabled={false}
                removeClippedSubviews={false}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.itemContainer}>
                            <PetCarouselItem
                                item={item}
                                width={"100%"}
                                hasShadow={true}
                            />
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    listContainer: {
        width: "100%",
    },
    itemContainer: {
        margin: 10,
    },
});

export default PetGrid;
