import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const ViewGridIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return (
        <MaterialCommunityIcons
            name="view-grid-outline"
            size={size}
            color={color}
        />
    );
};

export default ViewGridIcon;
