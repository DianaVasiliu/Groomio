import React from "react";
import { Foundation } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const MaleSymbolIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.size,
}) => {
    return <Foundation name="male-symbol" size={size} color={color} />;
};

export default MaleSymbolIcon;
