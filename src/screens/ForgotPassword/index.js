import React from "react";
import { Text } from "react-native";

import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
    TextInput,
    Image,
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import Logo from "../../../assets/icon.png";
import { styles } from "./styles";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View>
                <Image source={Logo} style={styles.logo} resizeMode="contain" />
            </View>
            <Text style={styles.title}>Forgot Password?</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {}} style={styles.button}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default ForgotPassword;
