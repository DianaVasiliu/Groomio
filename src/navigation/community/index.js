import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { Community, MyPosts } from "../../screens";
import { SCREENS } from "../../utils/constants";

const Stack = createStackNavigator();

export const CommunityNavigator = ({ navigation, route }) => {
    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (
            routeName &&
            routeName !== SCREENS.COMMUNITY &&
            routeName !== SCREENS.COMMUNITY_NAV
        ) {
            navigation.setOptions({ tabBarStyle: { display: "none" } });
        } else {
            navigation.setOptions({ tabBarStyle: { display: "flex" } });
        }
    }, [navigation, route]);
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREENS.COMMUNITY} component={Community} />
            <Stack.Screen name={SCREENS.MY_POSTS} component={MyPosts} />
        </Stack.Navigator>
    );
};
