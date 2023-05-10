import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { EditAccount, Home, Profile, Settings } from "../../screens";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createStackNavigator();

export const HomeNavigator = ({ navigation, route }) => {
    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName && routeName !== "Home" && routeName !== "HomeNav") {
            navigation.setOptions({ tabBarStyle: { display: "none" } });
        } else {
            navigation.setOptions({ tabBarStyle: { display: "flex" } });
        }
    }, [navigation, route]);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="EditAccount" component={EditAccount} />
        </Stack.Navigator>
    );
};
