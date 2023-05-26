import React, { useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import { View } from "native-base";
import LottieView from "lottie-react-native";

import { ANIMATIONS } from "../../../utils/images";

const PetCaring = () => {
    const animationRef = useRef(null);
    const animationData = ANIMATIONS.PET_CARING;

    useEffect(() => {
        if (animationRef?.current) {
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
        </View>
    );
};

const styles = StyleSheet.create({
    animation: { width: "90%", marginVertical: 10 },
    container: { alignItems: "center" },
});

export default PetCaring;
