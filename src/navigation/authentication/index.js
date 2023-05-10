import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ForgotPassword, Landing, Login, Signup } from "../../screens";

const Stack = createStackNavigator();

export const AuthenticationNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
    );
};
