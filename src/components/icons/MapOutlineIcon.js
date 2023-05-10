import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const MapOutlineIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return <FontAwesome name="map-o" size={size} color={color} />;
};

export default MapOutlineIcon;
