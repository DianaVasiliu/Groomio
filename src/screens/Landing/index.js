import React from "react";
import { Text } from "react-native";
import { Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

import SafeAreaScreen from "../SafeAreaScreen";

const Landing = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaScreen>
            <Text>Landing</Text>
            <Button onPress={() => navigation.navigate("Signup")}>
                Signup
            </Button>
            <Button onPress={() => navigation.navigate("Login")}>Login</Button>
        </SafeAreaScreen>
    );
};

export default Landing;
