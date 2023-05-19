import React from "react";
import { Foundation } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const FemaleSymbolIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.size,
}) => {
    return <Foundation name="female-symbol" size={size} color={color} />;
};

export default FemaleSymbolIcon;
