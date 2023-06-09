import React, { useLayoutEffect } from "react";
import { Platform } from "react-native";
import {
    CardStyleInterpolators,
    createStackNavigator,
} from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { Calendar, EditAccount, Home, Profile, Settings } from "../../screens";
import { SCREENS } from "../../utils/constants";

const Stack = createStackNavigator();

export const HomeNavigator = ({ navigation, route }) => {
    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (
            routeName &&
            routeName !== SCREENS.HOME &&
            routeName !== SCREENS.HOME_NAV
        ) {
            navigation.setOptions({ tabBarStyle: { display: "none" } });
        } else {
            navigation.setOptions({ tabBarStyle: { display: "flex" } });
        }
    }, [navigation, route]);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREENS.HOME} component={Home} />
            <Stack.Screen
                name={SCREENS.PROFILE}
                component={Profile}
                options={{
                    cardStyleInterpolator:
                        Platform.OS === "android"
                            ? CardStyleInterpolators.forVerticalIOS
                            : CardStyleInterpolators.forBottomSheetAndroid,
                }}
            />
            <Stack.Screen name={SCREENS.SETTINGS} component={Settings} />
            <Stack.Screen name={SCREENS.EDIT_ACCOUNT} component={EditAccount} />
            <Stack.Screen name={SCREENS.CALENDAR} component={Calendar} />
        </Stack.Navigator>
    );
};
