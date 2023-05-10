import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AddPet, Calendar, MyPets, PetProfile } from "../../screens";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createStackNavigator();

export const MyPetsNavigator = ({ navigation, route }) => {
    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName && routeName !== "MyPets" && routeName !== "MyPetsNav") {
            navigation.setOptions({ tabBarStyle: { display: "none" } });
        } else {
            navigation.setOptions({ tabBarStyle: { display: "flex" } });
        }
    }, [navigation, route]);
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MyPets" component={MyPets} />
            <Stack.Screen name="AddPet" component={AddPet} />
            <Stack.Screen name="PetProfile" component={PetProfile} />
            <Stack.Screen name="Calendar" component={Calendar} />
        </Stack.Navigator>
    );
};
