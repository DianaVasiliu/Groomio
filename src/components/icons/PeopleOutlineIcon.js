import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const PeopleOutlineIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return <Ionicons name="people-outline" size={size} color={color} />;
};

export default PeopleOutlineIcon;
