import React from "react";
import { SafeAreaView, Text, Button } from "react-native";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { styles } from "./styles";

import { logout as logoutAction } from "../../redux/actions/auth";

const Profile = ({ user, logout }) => {
    const { t } = useTranslation();

    const signout = () => {
        logout();
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text>
                Welcome to {t("app-name")}, {user.email}!
            </Text>
            <Button title="Logout" onPress={signout} />
        </SafeAreaView>
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
