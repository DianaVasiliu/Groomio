import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const ProfileFillIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return <FontAwesome name="user" size={size} color={color} />;
};

export default ProfileFillIcon;
