import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { defaultIconProps } from "../../utils/constants";

const CalendarIcon = ({
    size = defaultIconProps.size,
    color = defaultIconProps.color,
}) => {
    return <FontAwesome5 name="calendar-alt" size={size} color={color} />;
};

export default CalendarIcon;
