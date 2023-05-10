import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Community, MyPosts } from "../../screens";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createStackNavigator();

export const CommunityNavigator = ({ navigation, route }) => {
    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (
            routeName &&
            routeName !== "Community" &&
            routeName !== "CommunityNav"
        ) {
            navigation.setOptions({ tabBarStyle: { display: "none" } });
        } else {
            navigation.setOptions({ tabBarStyle: { display: "flex" } });
        }
    }, [navigation, route]);
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Community" component={Community} />
            <Stack.Screen name="MyPosts" component={MyPosts} />
        </Stack.Navigator>
    );
};
