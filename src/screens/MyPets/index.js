import React from "react";
import { useTranslation } from "react-i18next";
import { Image, Text, View } from "native-base";

import { CustomTextInput, ScreenTitle } from "../../components";
import SafeAreaScreen from "../SafeAreaScreen";
import { styles } from "./styles";
import { colors } from "../../theme";
import { SearchIcon } from "../../components/icons";
import { IMAGES } from "../../utils/images";
import { PetCategoryCarousel } from "../../components/PetCategoryCarousel";

const MyPets = () => {
    const { t } = useTranslation();
    const petPawsBackground = IMAGES.PAWS_BACKGROUND;

    return (
        <SafeAreaScreen>
            <ScreenTitle title={t("my-pets")} />
            <View style={styles.imageContainer}>
                <Image
                    source={petPawsBackground}
                    alt="paws"
                    style={styles.bgImage}
                />
                <View
                    style={{ ...styles.decoration, ...styles.bottomDecoration }}
                />
                <View
                    style={{ ...styles.decoration, ...styles.topDecoration }}
                />
                <View style={styles.searchContainer}>
                    <Text style={styles.searchText} fontSize={"2xl"}>
                        {t("find-your-pet")}
                    </Text>
                    <CustomTextInput
                        placeholder={t("search")}
                        startIconComponent={
                            <View style={styles.searchIconContainer}>
                                <SearchIcon
                                    size={22}
                                    color={colors.grey[400]}
                                />
                            </View>
                        }
                    />
                </View>
            </View>

            <Text style={styles.categoriesText} fontSize={20}>
                {t("categories")}
            </Text>
            <PetCategoryCarousel />
        </SafeAreaScreen>
    );
};

export default MyPets;
