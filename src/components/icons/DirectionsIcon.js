import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const DirectionsIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return <FontAwesome5 name="directions" size={size} color={color} />;
};

export default DirectionsIcon;
