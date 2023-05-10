import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from "../../screens";
import { MainNavigator } from "../main";

const Stack = createStackNavigator();

export const HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AppTabs" component={MainNavigator} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
};
