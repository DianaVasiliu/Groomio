import React from "react";

import { ScreenTitle } from "../../components";
import SafeAreaScreen from "../SafeAreaScreen";

const MyPets = () => {
    return (
        <SafeAreaScreen>
            <ScreenTitle title={"My pets"} hasBackButton />
        </SafeAreaScreen>
    );
};

export default MyPets;
