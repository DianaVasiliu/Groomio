import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const MapFillIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return <FontAwesome name="map" size={size} color={color} />;
};

export default MapFillIcon;
