import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const InfoFillIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return <Ionicons name="information-circle" size={size} color={color} />;
};

export default InfoFillIcon;
