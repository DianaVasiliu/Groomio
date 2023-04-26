import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaView, Text, TextInput, View, Button } from "react-native";
import { updateUsername } from "../../redux/actions/user";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";

const ProfileScreen = () => {
    const { t } = useTranslation();
    const [newUsername, setNewUsername] = useState("");
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const saveUsername = () => {
        if (newUsername === "") return;
        dispatch(updateUsername(newUsername));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text>Welcome to {t("app-name")}!</Text>
            <Text>Welcome {user.username}</Text>

            <View>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => setNewUsername(text)}
                    value={newUsername}
                    placeholder="New Username"
                    placeholderTextColor="white"
                />
                <Button title="Save" onPress={() => saveUsername()} />
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
