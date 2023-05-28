import React from "react";
import { Entypo } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const LogoutIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return <Entypo name="log-out" size={size} color={color} />;
};

export default LogoutIcon;
