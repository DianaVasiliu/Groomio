import React from "react";
import { SafeAreaView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base";
import { styles } from "./styles";

const Home = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Text>Home</Text>

            <Button onPress={() => navigation.navigate("Profile")}>
                Go to profile
            </Button>
        </SafeAreaView>
    );
};

export default Home;
