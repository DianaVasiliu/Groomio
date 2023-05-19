import React from "react";
import { Text } from "react-native";
import { Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

import SafeAreaScreen from "../SafeAreaScreen";

const Home = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaScreen>
            <Text>Home</Text>

            <Button onPress={() => navigation.navigate("Profile")}>
                Go to profile
            </Button>
        </SafeAreaScreen>
    );
};

export default Home;
