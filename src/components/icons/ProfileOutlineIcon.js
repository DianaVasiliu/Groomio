import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const ProfileOutlineIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return <FontAwesome name="user-o" size={size} color={color} />;
};

export default ProfileOutlineIcon;
