import React from "react";
import * as ImagePicker from "expo-image-picker";
import { View, StyleSheet } from "react-native";
import { Image } from "native-base";
import { useTranslation } from "react-i18next";

import { CustomButton } from "../small";
import { colors } from "../../theme";

const CustomImagePicker = ({ image, onChange }) => {
    const { t } = useTranslation();

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 0.7,
        });

        const img = result?.assets ? result.assets[0] : null;
        const uri = img?.uri;
        onChange({ uri });
    };

    return (
        <View style={styles.container}>
            <CustomButton
                text={t("pick-image")}
                onPress={pickImage}
                style={styles.button}
            />
            {image && (
                <Image
                    source={{ uri: image.uri }}
                    alt="Pet"
                    style={styles.selectedImage}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    selectedImage: {
        width: 200,
        height: 200,
        borderRadius: 20,
    },
    button: {
        backgroundColor: colors.black,
    },
});

export default CustomImagePicker;
