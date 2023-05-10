import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Community, Home, Map, MyPets, QuickInfo } from "../../screens";
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

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.primary[100],
                tabBarInactiveTintColor: "#aabbaa",
                // eslint-disable-next-line react/no-unstable-nested-components
                tabBarIcon: ({ focused, color }) => {
                    let Icon;
                    switch (route.name) {
                        case "Home":
                            Icon = focused ? HomeFillIcon : HomeOutlineIcon;
                            break;
                        case "Community":
                            Icon = focused ? PeopleFillIcon : PeopleOutlineIcon;
                            break;
                        case "Map":
                            Icon = focused ? MapFillIcon : MapOutlineIcon;
                            break;
                        case "QuickInfo":
                            Icon = focused ? InfoFillIcon : InfoOutlineIcon;
                            break;
                        case "MyPets":
                            Icon = focused ? PawFillIcon : PawOutlineIcon;
                            break;
                        default:
                            Icon = <></>;
                    }
                    return <Icon color={color} />;
                },
            })}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ tabBarLabel: "Home" }}
            />
            <Tab.Screen
                name="Community"
                component={Community}
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
                name="MyPets"
                component={MyPets}
                options={{ tabBarLabel: "My Pets" }}
            />
        </Tab.Navigator>
    );
};
