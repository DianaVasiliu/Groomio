import React from "react";
import { Text } from "react-native";
import { connect } from "react-redux";

import { styles } from "./styles";
import { signup } from "../../redux/actions/auth";

import { View, KeyboardAvoidingView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import Logo from "../../../assets/icon.png";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../utils/constants";
import { CustomTextInput, LoadingIndicator } from "../../components/small";

const Signup = ({ signUp }) => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createAccount = () => {
        setLoading(true);
        signUp(email, password, { fullName: name })
            .then(() => {
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    return (
        <KeyboardAvoidingView style={styles.container} behaviour="padding">
            {loading && <LoadingIndicator isLoading={loading} />}
            {/* IMAGE VIEW */}
            <View>
                <Image source={Logo} style={styles.logo} resizeMode="contain" />
            </View>
            <Text style={styles.title}>Hello there!</Text>
            {/* FIELD VIEWS */}
            <View style={styles.inputContainer}>
                <CustomTextInput
                    placeholder="Your Name"
                    value={name}
                    onChangeText={text => setName(text)}
                    style={styles.input}
                />
                <CustomTextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                    autoCapitalize="none"
                />
                <CustomTextInput
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
                    <Text style={styles.buttonText}>SIGNUP</Text>
                </TouchableOpacity>
                <View style={styles.alreadyHaveAccountContainer}>
                    <Text style={styles.simpleText}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(SCREENS.LOGIN);
                        }}>
                        <Text style={styles.simpleButtonText}>Login</Text>
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
        signUp: (email, password, other) =>
            dispatch(signup(email, password, other)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
