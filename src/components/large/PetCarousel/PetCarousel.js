import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Animated } from "react-native";
import { FlatList, Text, View } from "native-base";
import {
    FlingGestureHandler,
    Directions,
    State,
} from "react-native-gesture-handler";

import { carouselItemStyles, carouselStyles } from "./styles";
import PetCarouselItem from "./PetCarouselItem";
import { NotFound } from "../../small/animations";

const ITEM_WIDTH = 270;

const PetCarousel = ({ data }) => {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    const scrollXIndex = useRef(new Animated.Value(0)).current;
    const scrollXAnimated = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(scrollXIndex._value);
    const VISIBLE_ITEMS = 3;

    useEffect(() => {
        Animated.spring(scrollXAnimated, {
            toValue: scrollXIndex,
            useNativeDriver: true,
        }).start();
    });

    useEffect(() => {
        setActiveIndex(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const setActiveIndex = activeIndex => {
        setIndex(activeIndex);
        scrollXIndex.setValue(activeIndex);
    };

    if (!data || data.length === 0) {
        return <NotFound text={t("no-pets-found")} />;
    }

    return (
        <View>
            <FlingGestureHandler
                key="left"
                direction={Directions.LEFT}
                onHandlerStateChange={e => {
                    if (e.nativeEvent.state === State.END) {
                        if (index === data.length - 1) return;
                        setActiveIndex(index + 1);
                    } else if (e.nativeEvent.state === State.BEGAN) {
                        setCurrentIndex(scrollXIndex._value);
                    }
                }}>
                <FlingGestureHandler
                    key="right"
                    direction={Directions.RIGHT}
                    onHandlerStateChange={e => {
                        if (e.nativeEvent.state === State.END) {
                            if (index === 0) return;
                            setActiveIndex(index - 1);
                            setCurrentIndex(scrollXIndex._value);
                        }
                    }}>
                    <View style={carouselStyles.container}>
                        <FlatList
                            data={data}
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
                                    { zIndex: data.length - i },
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
                                    outputRange: [0.9, 1, 0],
                                });
                                const opacity =
                                    i >= index
                                        ? 1
                                        : scrollXAnimated.interpolate({
                                              inputRange,
                                              outputRange: [
                                                  1 - 1 / VISIBLE_ITEMS,
                                                  1,
                                                  0,
                                              ],
                                          });

                                const isVisible = i >= currentIndex;

                                return (
                                    isVisible && (
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
                                                hasShadow={i >= index}
                                            />
                                        </Animated.View>
                                    )
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
                        {data.length}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default PetCarousel;
