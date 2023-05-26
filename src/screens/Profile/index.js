import React from "react";
import { Text, Button } from "react-native";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { logout as logoutAction } from "../../redux/actions/auth";
import SafeAreaScreen from "../SafeAreaScreen";

const Profile = ({ user, logout }) => {
    const { t } = useTranslation();

    const signout = async () => {
        await logout();
    };

    return (
        <SafeAreaScreen>
            <Text>
                Welcome to {t("app-name")}, {user.email}!
            </Text>
            <Button title="Logout" onPress={signout} />
        </SafeAreaScreen>
    );
};

const mapStateToProps = state => {
    return {
        user: state.auth.currentUser,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logoutAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
