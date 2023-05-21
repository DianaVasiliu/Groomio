import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Platform } from "react-native";
import { Image, Pressable, Text, View } from "native-base";
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
import {
    SearchIcon,
    UpArrowIcon,
    ViewCarouselIcon,
    ViewGridIcon,
} from "../../components/icons";
import { IMAGES } from "../../utils/images";
import { SCREENS } from "../../utils/constants";
import { PetCarousel } from "../../components/large/PetCarousel";
import { PetGrid } from "../../components/large/PetGrid";

const MyPets = ({ pets }) => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const scrollRef = useRef();
    const petPawsBackground = IMAGES.PAWS_BACKGROUND;
    const [dataToShow, setDataToShow] = useState(pets);
    const [searchText, setSearchText] = useState("");
    const [view, setView] = useState("carousel");
    const [oldSelectedCategory, setOldSelectedCategory] = useState(null);
    const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
    const CONTENT_OFFSET_THRESHOLD = 1000;

    const scrollToTop = () => {
        scrollRef?.current?.scrollTo({
            animated: true,
            y: 0,
        });
    };

    useEffect(() => {
        filterBySearchText();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchText, oldSelectedCategory, pets]);

    const filterBySearchText = () => {
        let newPets =
            searchText !== "" && searchText
                ? pets.filter(
                      item =>
                          item.name
                              .toLowerCase()
                              .indexOf(searchText.toLowerCase()) !== -1 ||
                          item.breed
                              .toLowerCase()
                              .indexOf(searchText.toLowerCase()) !== -1,
                  )
                : pets;

        if (oldSelectedCategory !== null) {
            newPets = newPets.filter(
                item => oldSelectedCategory === item.type.toLowerCase(),
            );
        }
        setDataToShow(newPets);
    };

    const onSelectCategory = selectedCategory => {
        if (selectedCategory === oldSelectedCategory) {
            setOldSelectedCategory(null);
        } else {
            setOldSelectedCategory(selectedCategory);
        }
        const newPets = filterBySearchText();
        setDataToShow(newPets);
    };

    const onChangeView = () => {
        if (view === "carousel") setView("grid");
        else setView("carousel");
    };

    const onScreenScroll = e => {
        setContentVerticalOffset(e.nativeEvent.contentOffset.y);
    };

    return (
        <>
            <SafeAreaScreen ref={scrollRef} onScroll={onScreenScroll}>
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
                        style={{
                            ...styles.decoration,
                            ...styles.bottomDecoration,
                        }}
                    />
                    <View
                        style={{
                            ...styles.decoration,
                            ...styles.topDecoration,
                        }}
                    />
                    <View style={styles.searchContainer}>
                        <Text style={styles.searchText} fontSize={"2xl"}>
                            {t("find-your-pet")}
                        </Text>
                        <CustomTextInput
                            placeholder={t("search")}
                            onChangeText={setSearchText}
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

                <View style={styles.categoriesContainer}>
                    <Text style={styles.categoriesText} fontSize={20}>
                        {t("categories")}
                    </Text>
                    <Pressable
                        style={styles.viewIconContainer}
                        onPress={onChangeView}>
                        {view === "grid" ? (
                            <ViewCarouselIcon
                                size={Platform.OS === "android" ? 24 : 28}
                                color={colors.grey[900]}
                            />
                        ) : (
                            <ViewGridIcon
                                size={Platform.OS === "android" ? 24 : 28}
                                color={colors.grey[900]}
                            />
                        )}
                    </Pressable>
                </View>

                <PetCategoryCarousel
                    selected={oldSelectedCategory}
                    onSelect={onSelectCategory}
                />

                {view === "grid" ? (
                    <PetGrid data={dataToShow} />
                ) : (
                    <PetCarousel data={dataToShow} />
                )}
            </SafeAreaScreen>

            {contentVerticalOffset > CONTENT_OFFSET_THRESHOLD && (
                <Pressable onPress={scrollToTop} style={styles.goToTopButton}>
                    <UpArrowIcon size={24} color={colors.white} />
                </Pressable>
            )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        pets: state.auth.currentUser.pets,
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPets);
