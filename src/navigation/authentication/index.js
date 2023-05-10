import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Signup } from "../../screens";

const Stack = createStackNavigator();

export const AuthenticationNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    );
};
