import React from "react";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationNavigator } from "./authentication";
import { MainNavigator } from "./main";

const Navigator = ({ user }) => {
    return (
        <NavigationContainer>
            {user ? <MainNavigator /> : <AuthenticationNavigator />}
        </NavigationContainer>
    );
};

const mapStateToProps = state => {
    return {
        user: state.auth.currentUser,
    };
};

export default connect(mapStateToProps)(Navigator);
