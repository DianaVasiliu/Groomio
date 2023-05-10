import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const InfoOutlineIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return (
        <Ionicons name="information-circle-outline" size={size} color={color} />
    );
};

export default InfoOutlineIcon;
