import React from "react";
import { Text } from "react-native";
import { Button } from "native-base";
import { connect } from "react-redux";

import { styles } from "./styles";
import { signup } from "../../redux/actions/auth";

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
import { useNavigation } from "@react-navigation/native";

const Signup = ({ signUp }) => {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createAccount = () => {
        signUp(email, password);
    };

    return (
        <KeyboardAvoidingView style={styles.container} behaviour="padding">
            {/* IMAGE VIEW */}
            <View>
                <Image source={Logo} style={styles.logo} resizeMode="contain" />
            </View>
            <Text style={styles.title}>Hello there!</Text>
            {/* FIELD VIEWS */}
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Your Name"
                    value={name}
                    onChangeText={text => setName(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
                {/* <TextInput
                    placeholder="Repeat Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                /> */}
            </View>

            {/* BUTTON VIEWS */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={createAccount} style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Login");
                    }}>
                    <Text style={styles.simpleText}>
                        Already have an account?
                        <Text> </Text>
                        <Text style={styles.simpleButtonText}>Sign In</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        signUp: (email, password, other) =>
            dispatch(signup(email, password, other)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
