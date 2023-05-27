import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const StarIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return <AntDesign name="star" size={size} color={color} />;
};

export default StarIcon;
