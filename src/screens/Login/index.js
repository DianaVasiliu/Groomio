import React, { useState } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import { Button } from "native-base";
import { styles } from "./styles";

import { LoadingIndicator } from "../../components/small";
import { login } from "../../redux/actions/auth";
import SafeAreaScreen from "../SafeAreaScreen";

import {
    KeyboardAvoidingView,
    StyleSheet,
    View,
    TextInput,
    Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Logo from "../../../assets/icon.png";
import { useNavigation } from "@react-navigation/native";

const Login = ({ logIn }) => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async () => {
        setLoading(true);

        logIn(email, password).then(() => {
            setLoading(false);
        });
    };

    return (
        <KeyboardAvoidingView style={styles.container} behaviour="padding">
            {/* IMAGE VIEW */}
            <View>
                <Image source={Logo} style={styles.logo} resizeMode="contain" />
            </View>
            <Text style={styles.title}>Welcome back!</Text>
            {/* FIELD VIEWS */}
            <View style={styles.inputContainer}>
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
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("ForgotPassword");
                    }}>
                    <Text style={styles.simpleButtonText}>
                        Forgot password?
                    </Text>
                </TouchableOpacity>
            </View>

            {/* BUTTON VIEWS */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={loginUser} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Signup");
                    }}>
                    <Text style={styles.simpleText}>
                        Don't have an account?
                        <Text> </Text>
                        <Text style={styles.simpleButtonText}>SignUp</Text>
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
        logIn: (email, password) => dispatch(login(email, password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
