import React from "react";
import { Feather } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const SearchIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return <Feather name="search" size={size} color={color} />;
};

export default SearchIcon;
