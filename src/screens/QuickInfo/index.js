import React from "react";

import SafeAreaScreen from "../SafeAreaScreen";
import { ComingSoon, ScreenTitle } from "../../components/small";

const QuickInfo = () => {
    return (
        <SafeAreaScreen>
            <ScreenTitle title="Quick Info" />
            <ComingSoon />
        </SafeAreaScreen>
    );
};

export default QuickInfo;
