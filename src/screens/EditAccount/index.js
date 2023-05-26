import React from "react";

import SafeAreaScreen from "../SafeAreaScreen";
import { ComingSoon, ScreenTitle } from "../../components/small";

const EditAccount = () => {
    return (
        <SafeAreaScreen>
            <ScreenTitle title="Edit Account" hasBackButton />
            <ComingSoon />
        </SafeAreaScreen>
    );
};

export default EditAccount;
