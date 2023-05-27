import React, { useEffect, useRef, useState } from "react";
import * as Location from "expo-location";
import MapView, { Callout, Marker } from "react-native-maps";
import { Text, Toast, View } from "native-base";
import { useTranslation } from "react-i18next";

import SafeAreaScreen from "../SafeAreaScreen";
import { ScreenTitle } from "../../components/small";
import { ToastAlert } from "../../components/medium";
import { styles } from "./styles";
import { petFriendlyPlaces, petShops, vets } from "./mapData";
import { DirectionsIcon, StarIcon } from "../../components/icons";
import { colors } from "../../theme";

const Map = () => {
    const { t } = useTranslation();
    const [location, setLocation] = useState(null);
    const [permissionGranted, setPermissionGranted] = useState(false);
    const mapRef = useRef();

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

        Toast.show({
            render: () => (
                <ToastAlert
                    title={t("location-access-granted")}
                    description={t("you-can-see-your-location")}
                    status="success"
                />
            ),
        });
        setPermissionGranted(true);

        const loc = await Location.getCurrentPositionAsync();
        setLocation(loc);
        // mapRef.current.animateToRegion(loc.coords, 1000);
    };

    useEffect(() => {
        requestLocationPermissions();
    }, []);

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

    return (
        <SafeAreaScreen>
            <ScreenTitle title="Map" />
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
                    {vets.map((vet, i) =>
                        placeMarker(vet, i, colors.primary[100], t("vet")),
                    )}
                    {petShops.map((vet, i) =>
                        placeMarker(vet, i, colors.pink, t("pet-shop")),
                    )}
                    {petFriendlyPlaces.map((vet, i) =>
                        placeMarker(
                            vet,
                            i,
                            colors.secondary[300],
                            t("pet-friendly-place"),
                        ),
                    )}
                </MapView>
            </View>
        </SafeAreaScreen>
    );
};

export default Map;
