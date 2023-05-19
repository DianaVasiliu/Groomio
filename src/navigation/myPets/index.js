import React, { useLayoutEffect } from "react";
import { Platform } from "react-native";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { AddPet, Calendar, MyPets, PetProfile } from "../../screens";
import { SCREENS } from "../../utils/constants";

const Stack = createStackNavigator();

export const MyPetsNavigator = ({ navigation, route }) => {
    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (
            routeName &&
            routeName !== SCREENS.MY_PETS &&
            routeName !== SCREENS.MY_PETS_NAV
        ) {
            navigation.setOptions({ tabBarStyle: { display: "none" } });
        } else {
            navigation.setOptions({ tabBarStyle: { display: "flex" } });
        }
    }, [navigation, route]);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREENS.MY_PETS} component={MyPets} />
            <Stack.Screen
                name={SCREENS.ADD_PET}
                component={AddPet}
                options={{
                    cardStyleInterpolator:
                        Platform.OS === "android"
                            ? CardStyleInterpolators.forVerticalIOS
                            : CardStyleInterpolators.forBottomSheetAndroid,
                }}
            />
            <Stack.Screen name={SCREENS.PET_PROFILE} component={PetProfile} />
            <Stack.Screen name={SCREENS.CALENDAR} component={Calendar} />
        </Stack.Navigator>
    );
};
