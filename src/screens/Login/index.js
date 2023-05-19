import React, { useState } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import { Button } from "native-base";

import { LoadingIndicator } from "../../components";
import { login } from "../../redux/actions/auth";
import SafeAreaScreen from "../SafeAreaScreen";

const Login = ({ logIn }) => {
    const [loading, setLoading] = useState(false);

    const loginDefault = async () => {
        setLoading(true);

        // logIn("****", "****").then(() => {
        //     setLoading(false);
        // });
    };

    return (
        <SafeAreaScreen>
            <Text>Login</Text>

            <Button onPress={loginDefault}>Log In with default account</Button>
            <LoadingIndicator isLoading={loading} />
        </SafeAreaScreen>
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
