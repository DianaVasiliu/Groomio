import React from "react";
import { Entypo } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const CameraIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return <Entypo name="camera" size={size} color={color} />;
};

export default CameraIcon;
