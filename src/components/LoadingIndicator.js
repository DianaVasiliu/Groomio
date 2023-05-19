import React, { useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import { Modal, View } from "native-base";
import LottieView from "lottie-react-native";

import { colors } from "../theme";
import { ANIMATIONS } from "../utils/images";

const LoadingIndicator = ({ isLoading }) => {
    const animationRef = useRef(null);
    const animationData = ANIMATIONS.DOG_WALKING;

    useEffect(() => {
        if (animationRef.current) {
            setTimeout(() => {
                animationRef.current?.reset();
                animationRef.current?.play();
            }, 100);
        }
    }, []);

    return (
        <Modal isOpen={isLoading}>
            <Modal.Content style={styles.modalContent}>
                <Modal.Body>
                    <View style={styles.container}>
                        <LottieView
                            ref={animationRef}
                            autoPlay
                            loop
                            source={animationData}
                            style={styles.animation}
                        />
                    </View>
                </Modal.Body>
            </Modal.Content>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: colors.transparent,
        elevation: 0,
    },
    animation: { height: 90 },
    container: {
        backgroundColor: colors.white,
        width: 130,
        height: 130,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2000,
        alignSelf: "center",
    },
});

export default LoadingIndicator;
