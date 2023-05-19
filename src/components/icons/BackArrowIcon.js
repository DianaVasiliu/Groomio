import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const BackArrowIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return <Ionicons name="chevron-back" size={size} color={color} />;
};

export default BackArrowIcon;
