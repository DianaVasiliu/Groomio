import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const HomeOutlineIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return <Ionicons name="home-outline" size={size} color={color} />;
};

export default HomeOutlineIcon;
