import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "native-base";
import { useTranslation } from "react-i18next";

import PetCategoryItem from "./PetCategoryItem";
import { IMAGES } from "../../../utils/images";

const PetCategoryCarousel = ({ selected, onSelect }) => {
    const { t } = useTranslation();

    const items = [
        { image: IMAGES.PET_ICONS.DOG, name: t("dogs"), type: "dog" },
        { image: IMAGES.PET_ICONS.CAT, name: t("cats"), type: "cat" },
        { image: IMAGES.PET_ICONS.BIRD, name: t("birds"), type: "bird" },
        { image: IMAGES.PET_ICONS.FISH, name: t("fish"), type: "fish" },
        {
            image: IMAGES.PET_ICONS.TURTLE,
            name: t("reptiles"),
            type: "reptile",
        },
        { image: IMAGES.PET_ICONS.BUNNY, name: t("rodents"), type: "rodent" },
        { image: IMAGES.PET_ICONS.OTHER, name: t("other"), type: "other" },
    ];

    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.container}>
                    {items.map(({ image, name, type }) => (
                        <PetCategoryItem
                            item={{ image, name, type }}
                            key={name}
                            onPress={() => onSelect(type)}
                            selected={selected}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10,
        paddingHorizontal: 20,
    },
});

export default PetCategoryCarousel;
