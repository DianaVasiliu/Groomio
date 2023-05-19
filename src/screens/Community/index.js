import React from "react";
import { Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SafeAreaScreen from "../SafeAreaScreen";

const Community = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaScreen>
            <Text>Community</Text>
            <Button
                title="To My Posts"
                onPress={() => navigation.navigate("MyPosts")}
            />
        </SafeAreaScreen>
    );
};

export default Community;
