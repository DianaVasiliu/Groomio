import React from "react";

import SafeAreaScreen from "../SafeAreaScreen";
import { ComingSoon, ScreenTitle } from "../../components/small";

const Calendar = () => {
    return (
        <SafeAreaScreen>
            <ScreenTitle title="Calendar" hasBackButton />
            <ComingSoon />
        </SafeAreaScreen>
    );
};

export default Calendar;
