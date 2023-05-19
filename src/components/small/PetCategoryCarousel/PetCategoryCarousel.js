import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "native-base";
import { useTranslation } from "react-i18next";

import PetCategoryItem from "./PetCategoryItem";
import { IMAGES } from "../../../utils/images";

const PetCategoryCarousel = props => {
    const { t } = useTranslation();

    const items = [
        { image: IMAGES.PET_ICONS.DOG, name: t("dogs") },
        { image: IMAGES.PET_ICONS.CAT, name: t("cats") },
        { image: IMAGES.PET_ICONS.BIRD, name: t("birds") },
        { image: IMAGES.PET_ICONS.FISH, name: t("fish") },
        { image: IMAGES.PET_ICONS.TURTLE, name: t("reptiles") },
        { image: IMAGES.PET_ICONS.BUNNY, name: t("rodents") },
        { image: IMAGES.PET_ICONS.OTHER, name: t("other") },
    ];

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                {items.map(({ image, name }) => (
                    <PetCategoryItem image={image} name={name} key={name} />
                ))}
            </View>
        </ScrollView>
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
