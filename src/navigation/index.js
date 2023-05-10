import React from "react";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationNavigator } from "./authentication";
import { HomeNavigator } from "./home";

const Navigator = ({ user }) => {
    return (
        <NavigationContainer>
            {user ? <HomeNavigator /> : <AuthenticationNavigator />}
        </NavigationContainer>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(Navigator);
