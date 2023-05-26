import React from "react";

import SafeAreaScreen from "../SafeAreaScreen";
import { ComingSoon, ScreenTitle } from "../../components/small";

const MyPosts = () => {
    return (
        <SafeAreaScreen>
            <ScreenTitle title="MY Posts" hasBackButton />
            <ComingSoon />
        </SafeAreaScreen>
    );
};

export default MyPosts;
