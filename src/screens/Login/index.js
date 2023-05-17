import React from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";
import { Button } from "native-base";
import { connect } from "react-redux";
import { login } from "../../redux/actions/auth";

const Login = ({ logIn }) => {
    const loginDefault = () => {
        // logIn("*******", "*********");
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text>Login</Text>

            <Button onPress={loginDefault}>Log In with default account</Button>
        </SafeAreaView>
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
