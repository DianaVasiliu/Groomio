import React from "react";
import { Entypo } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const PlusIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return <Entypo name="plus" size={size} color={color} />;
};

export default PlusIcon;
