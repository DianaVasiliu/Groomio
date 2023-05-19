import React from "react";
import { Image, Text, View } from "native-base";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

import {
    CustomTextInput,
    ScreenTitle,
    PetCategoryCarousel,
    AddButton,
} from "../../components/small";
import SafeAreaScreen from "../SafeAreaScreen";
import { styles } from "./styles";
import { colors } from "../../theme";
import { SearchIcon } from "../../components/icons";
import { IMAGES } from "../../utils/images";
import { SCREENS } from "../../utils/constants";
import { PetCarousel } from "../../components/large/PetCarousel";

const MyPets = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const petPawsBackground = IMAGES.PAWS_BACKGROUND;

    return (
        <SafeAreaScreen>
            <View style={styles.titleContainer}>
                <ScreenTitle title={t("my-pets")} />
                <AddButton
                    onPress={() => navigation.navigate(SCREENS.ADD_PET)}
                />
            </View>
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

            <PetCarousel />
        </SafeAreaScreen>
    );
};

export default MyPets;
