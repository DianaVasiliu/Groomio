import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Animated } from "react-native";
import { FlatList, Text, View } from "native-base";
import {
    FlingGestureHandler,
    Directions,
    State,
} from "react-native-gesture-handler";

import { carouselItemStyles, carouselStyles } from "./styles";
import PetCarouselItem from "./PetCarouselItem";

const ITEM_WIDTH = 270;

const PetCarousel = ({ pets }) => {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    const scrollXIndex = useRef(new Animated.Value(0)).current;
    const scrollXAnimated = useRef(new Animated.Value(0)).current;
    const VISIBLE_ITEMS = 3;

    useEffect(() => {
        Animated.spring(scrollXAnimated, {
            toValue: scrollXIndex,
            useNativeDriver: true,
        }).start();
    });

    const setActiveIndex = activeIndex => {
        setIndex(activeIndex);
        scrollXIndex.setValue(activeIndex);
    };

    return (
        <View>
            <FlingGestureHandler
                key="left"
                direction={Directions.LEFT}
                onHandlerStateChange={e => {
                    if (e.nativeEvent.state === State.END) {
                        if (index === pets.length - 1) return;
                        setActiveIndex(index + 1);
                    }
                }}>
                <FlingGestureHandler
                    key="right"
                    direction={Directions.RIGHT}
                    onHandlerStateChange={e => {
                        if (e.nativeEvent.state === State.END) {
                            if (index === 0) return;
                            setActiveIndex(index - 1);
                        }
                    }}>
                    <View style={carouselStyles.container}>
                        <FlatList
                            data={pets}
                            keyExtractor={(_, i) => String(i)}
                            horizontal
                            inverted
                            scrollEnabled={false}
                            removeClippedSubviews={false}
                            contentContainerStyle={carouselStyles.listContainer}
                            // eslint-disable-next-line react/no-unstable-nested-components
                            CellRendererComponent={({
                                item,
                                index: i,
                                children,
                                style,
                                ...props
                            }) => {
                                const newStyle = [
                                    style,
                                    { zIndex: pets.length - i },
                                ];
                                return (
                                    <View style={newStyle} index={i} {...props}>
                                        {children}
                                    </View>
                                );
                            }}
                            renderItem={({ item, index: i }) => {
                                const inputRange = [i - 1, i, i + 1];
                                const translateX = scrollXAnimated.interpolate({
                                    inputRange,
                                    outputRange: [50, 0, -100],
                                });
                                const scale = scrollXAnimated.interpolate({
                                    inputRange,
                                    outputRange: [0.9, 1, 1.2],
                                });
                                const opacity = scrollXAnimated.interpolate({
                                    inputRange,
                                    outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
                                });

                                return (
                                    <Animated.View
                                        style={{
                                            ...carouselStyles.card,
                                            left: -ITEM_WIDTH / 2,
                                            opacity,
                                            transform: [
                                                { translateX },
                                                { scale },
                                            ],
                                        }}>
                                        <PetCarouselItem
                                            item={item}
                                            width={ITEM_WIDTH}
                                            hasShadow={index === i}
                                        />
                                    </Animated.View>
                                );
                            }}
                        />
                    </View>
                </FlingGestureHandler>
            </FlingGestureHandler>

            <View style={carouselItemStyles.indexIndicatorContainer}>
                <View style={carouselItemStyles.indexIndicator}>
                    <Text style={carouselItemStyles.indicatorText}>
                        {index + 1}
                    </Text>
                </View>
                <Text style={carouselItemStyles.ofText} fontSize={"md"}>
                    {t("of")}
                </Text>
                <View style={carouselItemStyles.indexIndicator}>
                    <Text style={carouselItemStyles.indicatorText}>
                        {pets.length}
                    </Text>
                </View>
            </View>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(PetCarousel);
