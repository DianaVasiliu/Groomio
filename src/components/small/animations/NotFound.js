import React, { useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "native-base";
import { useTranslation } from "react-i18next";
import LottieView from "lottie-react-native";

import { colors } from "../../../theme";
import { ANIMATIONS } from "../../../utils/images";

const NotFound = ({ text }) => {
    const { t } = useTranslation();
    const animationRef = useRef(null);
    const animationData = ANIMATIONS.SAD_CAT;

    useEffect(() => {
        if (animationRef.current) {
            setTimeout(() => {
                animationRef.current?.reset();
                animationRef.current?.play();
            }, 100);
        }
    }, []);

    return (
        <View style={styles.container}>
            <LottieView
                ref={animationRef}
                autoPlay
                loop
                source={animationData}
                style={styles.animation}
            />
            <Text style={styles.text} fontSize="2xl">
                {text ?? t("not-found")}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    animation: { height: 200 },
    container: { alignItems: "center" },
    text: { color: colors.primary[900], fontWeight: "bold" },
});

export default NotFound;
