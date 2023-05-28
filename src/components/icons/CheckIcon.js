import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const CheckIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return <MaterialIcons name="check" size={size} color={color} />;
};

export default CheckIcon;
