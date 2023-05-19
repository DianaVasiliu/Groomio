import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTranslation } from "react-i18next";
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
import { SCREENS } from "../../utils/constants";

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
    const { t } = useTranslation();

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
                        case SCREENS.HOME_NAV:
                            Icon = focused ? HomeFillIcon : HomeOutlineIcon;
                            break;
                        case SCREENS.COMMUNITY_NAV:
                            Icon = focused ? PeopleFillIcon : PeopleOutlineIcon;
                            break;
                        case SCREENS.MAP:
                            Icon = focused ? MapFillIcon : MapOutlineIcon;
                            break;
                        case SCREENS.QUICK_INFO:
                            Icon = focused ? InfoFillIcon : InfoOutlineIcon;
                            break;
                        case SCREENS.MY_PETS_NAV:
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
                name={SCREENS.HOME_NAV}
                component={HomeNavigator}
                options={{ tabBarLabel: t("home") }}
            />
            <Tab.Screen
                name={SCREENS.COMMUNITY_NAV}
                component={CommunityNavigator}
                options={{ tabBarLabel: t("community") }}
            />
            <Tab.Screen
                name={SCREENS.MAP}
                component={Map}
                options={{ tabBarLabel: t("map") }}
            />
            <Tab.Screen
                name={SCREENS.QUICK_INFO}
                component={QuickInfo}
                options={{ tabBarLabel: t("quick-info") }}
            />
            <Tab.Screen
                name={SCREENS.MY_PETS_NAV}
                component={MyPetsNavigator}
                options={{ tabBarLabel: t("my-pets") }}
            />
        </Tab.Navigator>
    );
};
