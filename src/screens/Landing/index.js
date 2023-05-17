import React from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";
import { Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

const Landing = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Text>Landing</Text>
            <Button onPress={() => navigation.navigate("Signup")}>
                Signup
            </Button>
            <Button onPress={() => navigation.navigate("Login")}>Login</Button>
        </SafeAreaView>
    );
};

export default Landing;
