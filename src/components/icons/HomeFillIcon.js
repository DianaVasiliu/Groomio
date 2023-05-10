import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const HomeFillIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return <Ionicons name="home" size={size} color={color} />;
};

export default HomeFillIcon;
