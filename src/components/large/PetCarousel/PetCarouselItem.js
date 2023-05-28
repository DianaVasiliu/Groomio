import React from "react";
import { Text, View } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { carouselItemStyles } from "./styles";
import { FemaleSymbolIcon, MaleSymbolIcon } from "../../icons";
import { colors } from "../../../theme";
import { Image, TouchableOpacity } from "react-native";
import { SCREENS } from "../../../utils/constants";

const PetCarouselItem = ({ item, width, hasShadow }) => {
    const isMale = item.gender.charAt(0).toLowerCase() === "m";
    const genderColor = isMale ? colors.blue : colors.pink;

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate(SCREENS.PET_PROFILE, { item })}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
                ...carouselItemStyles.container,
                width,
                elevation: hasShadow ? 5 : 0,
                shadowOpacity: hasShadow ? 0.3 : 0,
            }}>
            <Image
                source={{ uri: item.photoUrl }}
                style={carouselItemStyles.image}
                alt={item.breed}
            />
            <View style={carouselItemStyles.detailsContainer}>
                <View>
                    <Text
                        style={{
                            ...carouselItemStyles.nameText,
                            color: genderColor,
                        }}
                        fontSize={"2xl"}>
                        {item.name}
                    </Text>
                    <Text style={carouselItemStyles.breedText} fontSize={"md"}>
                        {item.breed}
                    </Text>
                </View>
                {isMale ? (
                    <MaleSymbolIcon size={50} color={genderColor} />
                ) : (
                    <FemaleSymbolIcon size={50} color={genderColor} />
                )}
            </View>
        </TouchableOpacity>
    );
};

export default PetCarouselItem;
