import React from "react";
import { Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SafeAreaScreen from "../SafeAreaScreen";
import { SCREENS } from "../../utils/constants";

const Community = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaScreen>
            <Text>Community</Text>
            <Button
                title="To My Posts"
                onPress={() => navigation.navigate(SCREENS.MY_POSTS)}
            />
        </SafeAreaScreen>
    );
};

export default Community;
