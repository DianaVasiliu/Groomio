import React, { useEffect, useRef, useState } from "react";
import * as Location from "expo-location";
import MapView, { Callout, Marker } from "react-native-maps";
import { Text, Toast, View } from "native-base";
import { useTranslation } from "react-i18next";

import { ScreenTitle, MapTabs } from "../../components/small";
import { ToastAlert } from "../../components/medium";
import { styles } from "./styles";
import { petFriendlyPlaces, petShops, vets } from "./mapData";
import { DirectionsIcon, StarIcon } from "../../components/icons";
import { colors } from "../../theme";
import { SafeAreaView } from "react-native";
import { MAP_LOCATION_TYPES } from "../../utils/constants";

const Map = ({ route }) => {
    const { t } = useTranslation();
    const mapRef = useRef();
    const LOCATIONS = [
        {
            name: t("vets"),
            itemName: t("vet"),
            data: vets,
            type: MAP_LOCATION_TYPES.VETS,
            color: colors.primary[600],
        },
        {
            name: t("pet-shops"),
            itemName: t("pet-shop"),
            data: petShops,
            type: MAP_LOCATION_TYPES.PET_SHOPS,
            color: colors.secondary[600],
        },
        {
            name: t("pet-friendly-places"),
            itemName: t("pet-friendly-place"),
            data: petFriendlyPlaces,
            type: MAP_LOCATION_TYPES.PET_FRIENDLY_PLACES,
            color: colors.pink,
        },
    ];

    const fillVisibleCategoriesObject = value => {
        const vis = {};
        LOCATIONS.forEach(loc => {
            vis[loc.type] = value;
        });
        return vis;
    };

    const [location, setLocation] = useState(null);
    const [permissionGranted, setPermissionGranted] = useState(false);
    const [visibleCategories, setVisibleCategories] = useState(
        fillVisibleCategoriesObject(true),
    );

    const requestLocationPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            Toast.show({
                render: () => (
                    <ToastAlert
                        title={t("location-access-denied")}
                        description={t("you-must-allow-location-access")}
                        status="warning"
                    />
                ),
            });
            return;
        }

        setPermissionGranted(true);

        const loc = await Location.getCurrentPositionAsync();
        setLocation(loc);
        // mapRef.current.animateToRegion(loc.coords, 1000);
    };

    const filterRouting = () => {
        if (route.params) {
            const { filter } = route.params;
            let filteredLocations = fillVisibleCategoriesObject(false);
            switch (filter) {
                case MAP_LOCATION_TYPES.VETS:
                    filteredLocations[MAP_LOCATION_TYPES.VETS] = true;
                    break;
                case MAP_LOCATION_TYPES.PET_SHOPS:
                    filteredLocations[MAP_LOCATION_TYPES.PET_SHOPS] = true;
                    break;
                case MAP_LOCATION_TYPES.PET_FRIENDLY_PLACES:
                    filteredLocations[
                        MAP_LOCATION_TYPES.PET_FRIENDLY_PLACES
                    ] = true;
                    break;
            }
            setVisibleCategories(filteredLocations);
        }
    };

    useEffect(() => {
        requestLocationPermissions();
    }, []);

    useEffect(() => {
        filterRouting();
    }, [route]);

    const placeMarker = (vet, i, color, type) => {
        const { title, rating, longitude, latitude } = vet;
        return (
            <Marker
                key={i}
                coordinate={{ longitude, latitude }}
                pinColor={color}>
                <Callout
                    tooltip
                    style={styles.callout}
                    onPress={() => {
                        console.log("press");
                    }}>
                    <View style={styles.calloutContainer}>
                        <View>
                            <View style={styles.placeTitleContainer}>
                                <Text style={styles.placeTitle} fontSize={18}>
                                    {title}
                                </Text>
                            </View>
                            <View style={styles.placeRatingContainer}>
                                <StarIcon color={colors.yellow} />
                                <Text style={styles.placeRating} fontSize={16}>
                                    {rating}
                                </Text>
                            </View>
                            <Text style={styles.placeType}>{type}</Text>
                        </View>
                        <View style={styles.directionsButtonContainer}>
                            <DirectionsIcon color={colors.white} />
                        </View>
                    </View>
                </Callout>
            </Marker>
        );
    };

    const filterPlaces = type => {
        const newVisible = { ...visibleCategories };
        newVisible[type] = !newVisible[type];
        setVisibleCategories(newVisible);
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScreenTitle title="Map" />
            <MapTabs
                onSelect={filterPlaces}
                tabs={LOCATIONS}
                selectedTabs={visibleCategories}
            />
            <View style={styles.mapViewContainer}>
                <MapView
                    ref={mapRef}
                    style={styles.mapView}
                    provider="google"
                    showsUserLocation={permissionGranted}
                    showsMyLocationButton
                    showsCompass
                    showsBuildings
                    initialRegion={
                        location
                            ? {
                                  longitude: location?.coords.longitude,
                                  latitude: location?.coords.latitude,
                                  latitudeDelta: 1,
                                  longitudeDelta: 1,
                              }
                            : null
                    }>
                    {LOCATIONS.map(loc => {
                        const { data, color, itemName, type } = loc;
                        return (
                            visibleCategories[type] &&
                            data.map((item, i) =>
                                placeMarker(item, i, color, itemName),
                            )
                        );
                    })}
                </MapView>
            </View>
        </SafeAreaView>
    );
};

export default Map;
