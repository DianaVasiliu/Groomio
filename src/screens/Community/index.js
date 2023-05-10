import React from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

const Community = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Text>Community</Text>
            <Button
                title="ToMyPosts"
                onPress={() => navigation.navigate("MyPosts")}
            />
        </SafeAreaView>
    );
};

export default Community;
