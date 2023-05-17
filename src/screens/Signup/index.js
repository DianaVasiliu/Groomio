import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Button } from "native-base";
import { connect } from "react-redux";
import { styles } from "./styles";

import { signup } from "../../redux/actions/auth";

const Signup = ({ signUp }) => {
    const createAccount = () => {
        // signUp("********", "*******");
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text>Signup</Text>

            <Button onPress={createAccount}>
                Sign Up with default account
            </Button>
        </SafeAreaView>
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
