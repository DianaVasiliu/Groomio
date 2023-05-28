import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const EditIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return <MaterialCommunityIcons name="pencil" size={size} color={color} />;
};

export default EditIcon;
