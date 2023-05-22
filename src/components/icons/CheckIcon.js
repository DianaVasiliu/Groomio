import React from "react";
import { Feather } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const CheckIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return <Feather name="check" size={size} color={color} />;
};

export default CheckIcon;
