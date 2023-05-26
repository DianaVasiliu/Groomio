import React from "react";

import SafeAreaScreen from "../SafeAreaScreen";
import { ComingSoon, ScreenTitle } from "../../components/small";

const Settings = () => {
    return (
        <SafeAreaScreen>
            <ScreenTitle title="Settings" hasBackButton />
            <ComingSoon />
        </SafeAreaScreen>
    );
};

export default Settings;
