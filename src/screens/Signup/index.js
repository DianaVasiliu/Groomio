import React from "react";
import { Text } from "react-native";
import { Button } from "native-base";
import { connect } from "react-redux";

import { signup } from "../../redux/actions/auth";
import SafeAreaScreen from "../SafeAreaScreen";

const Signup = ({ signUp }) => {
    const createAccount = () => {
        // signUp("****", "***");
    };

    return (
        <SafeAreaScreen>
            <Text>Signup</Text>

            <Button onPress={createAccount}>
                Sign Up with default account
            </Button>
        </SafeAreaScreen>
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
