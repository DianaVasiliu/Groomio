import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Map, QuickInfo } from "../../screens";
import {
    HomeFillIcon,
    HomeOutlineIcon,
    InfoFillIcon,
    InfoOutlineIcon,
    MapFillIcon,
    MapOutlineIcon,
    PawFillIcon,
    PawOutlineIcon,
    PeopleFillIcon,
    PeopleOutlineIcon,
} from "../../components/icons";
import { colors } from "../../theme";
import { CommunityNavigator } from "../community";
import { HomeNavigator } from "../home";
import { MyPetsNavigator } from "../myPets";

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.primary[400],
                tabBarInactiveTintColor: colors.grey[400],
                // eslint-disable-next-line react/no-unstable-nested-components
                tabBarIcon: ({ focused, color }) => {
                    let Icon;
                    switch (route.name) {
                        case "HomeNav":
                            Icon = focused ? HomeFillIcon : HomeOutlineIcon;
                            break;
                        case "CommunityNav":
                            Icon = focused ? PeopleFillIcon : PeopleOutlineIcon;
                            break;
                        case "Map":
                            Icon = focused ? MapFillIcon : MapOutlineIcon;
                            break;
                        case "QuickInfo":
                            Icon = focused ? InfoFillIcon : InfoOutlineIcon;
                            break;
                        case "MyPetsNav":
                            Icon = focused ? PawFillIcon : PawOutlineIcon;
                            break;
                        default:
                            // eslint-disable-next-line react/no-unstable-nested-components
                            Icon = () => <></>;
                    }
                    return <Icon color={color} />;
                },
            })}>
            <Tab.Screen
                name="HomeNav"
                component={HomeNavigator}
                options={{ tabBarLabel: "Home" }}
            />
            <Tab.Screen
                name="CommunityNav"
                component={CommunityNavigator}
                options={{ tabBarLabel: "Community" }}
            />
            <Tab.Screen
                name="Map"
                component={Map}
                options={{ tabBarLabel: "Map" }}
            />
            <Tab.Screen
                name="QuickInfo"
                component={QuickInfo}
                options={{ tabBarLabel: "Quick Info" }}
            />
            <Tab.Screen
                name="MyPetsNav"
                component={MyPetsNavigator}
                options={{ tabBarLabel: "My Pets" }}
            />
        </Tab.Navigator>
    );
};
