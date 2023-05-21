import React from "react";
import { Image, Text, View } from "native-base";

import { carouselItemStyles } from "./styles";
import { FemaleSymbolIcon, MaleSymbolIcon } from "../../icons";
import { colors } from "../../../theme";

const PetCarouselItem = ({ item, width, hasShadow }) => {
    const isMale = item.gender.charAt(0).toLowerCase() === "m";
    const genderColor = isMale ? colors.blue : colors.pink;

    return (
        <View
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
        </View>
    );
};

export default PetCarouselItem;
