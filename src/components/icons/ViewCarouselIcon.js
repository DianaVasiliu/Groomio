import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const ViewCarouselIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return (
        <MaterialCommunityIcons
            name="view-carousel-outline"
            size={size}
            color={color}
        />
    );
};

export default ViewCarouselIcon;
