import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ForgotPassword, Landing, Login, Signup } from "../../screens";
import { SCREENS } from "../../utils/constants";

const Stack = createStackNavigator();

export const AuthenticationNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREENS.LANDING} component={Landing} />
            <Stack.Screen name={SCREENS.LOGIN} component={Login} />
            <Stack.Screen name={SCREENS.SIGNUP} component={Signup} />
            <Stack.Screen
                name={SCREENS.FORGOT_PASSWORD}
                component={ForgotPassword}
            />
        </Stack.Navigator>
    );
};
