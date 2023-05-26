import React, { useState } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import { styles } from "./styles";

import { CustomTextInput, LoadingIndicator } from "../../components/small";
import { login } from "../../redux/actions/auth";

import { KeyboardAvoidingView, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Logo from "../../../assets/icon.png";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../utils/constants";
import { colors } from "../../theme";

const Login = ({ logIn }) => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const loginUser = async () => {
        setLoading(true);

        logIn(email, password)
            .then(() => {
                setLoading(false);
            })
            .catch(e => {
                setLoading(false);
                console.log(e);
                if (
                    e.code === "auth/invalid-email" ||
                    e.code === "auth/wrong-password"
                ) {
                    setError("Wrong email or password");
                } else {
                    setError("Something went wrong, please try again");
                }
            });
    };

    return (
        <KeyboardAvoidingView style={styles.container} behaviour="padding">
            {loading && <LoadingIndicator isLoading={loading} />}
            {/* IMAGE VIEW */}
            <View>
                <Image source={Logo} style={styles.logo} resizeMode="contain" />
            </View>
            <Text style={styles.title}>Welcome back!</Text>
            {/* FIELD VIEWS */}
            <View style={styles.inputContainer}>
                {error && (
                    <Text style={{ color: colors.red, textAlign: "center" }}>
                        {error}
                    </Text>
                )}
                <CustomTextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => {
                        setEmail(text);
                        setError(null);
                    }}
                    style={styles.input}
                    type="email"
                    autoCapitalize="none"
                />
                <CustomTextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => {
                        setPassword(text);
                        setError(null);
                    }}
                    style={styles.input}
                    secureTextEntry
                />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(SCREENS.FORGOT_PASSWORD);
                    }}>
                    <Text style={styles.simpleButtonText}>
                        Forgot password?
                    </Text>
                </TouchableOpacity>
            </View>

            {/* BUTTON VIEWS */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={loginUser} style={styles.button}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <View style={styles.dontHaveAccountContainer}>
                    <Text style={styles.simpleText}>
                        Don't have an account?{" "}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(SCREENS.SIGNUP);
                        }}>
                        <Text style={styles.simpleButtonText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
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
