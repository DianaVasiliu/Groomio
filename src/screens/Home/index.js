import React from "react";
import { connect } from "react-redux";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Image } from "expo-image";

import SafeAreaScreen from "../SafeAreaScreen";
import { SCREENS } from "../../utils/constants";
import { IMAGES } from "../../utils/images";
import { colors } from "../../theme";
import { PawFillIcon, ProfileFillIcon } from "../../components/icons";
import { styles } from "./styles";

const Places = [
    {
        title: "Pet Shops",
        image: IMAGES.STORE_HOME,
    },
    {
        title: "Vets",
        image: IMAGES.MEDICINE_HOME,
    },
    {
        title: "Pet Friendly Places",
        image: IMAGES.PET_FRIENDLY_PLACES_HOME,
    },
];

const Container = styled.View`
    padding-horizontal: 5%;
`;

const ProfileContainer = styled.View`
    height: 100px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const WelcomeContainer = styled.View``;
const GeneralContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
    gap: 10px;
`;
const AppointmentText = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: white;
`;
const AppointmentDetailsText = styled.Text`
    color: white;
`;
const Appointments = styled.View`
    background-color: #679ddb;
    padding: 15px;
    border-radius: 15px;
    width: 75%;
    justify-content: space-between;
`;
const Calendar = styled.TouchableOpacity`
    background-color: black;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border-radius: 15px;
`;
const PlaceTitle = styled.Text`
    color: grey;
    font-weight: bold;
    margin-top: 3px;
    max-width: 80%;
    text-align: center;
    align-self: center;
`;
const DevelopmentContainer = styled.TouchableOpacity`
    background-color: black;
    padding-vertical: 16px;
    padding-horizontal: 14px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 15px;
    gap: 10px;
    flex: 1;
`;
const CommunityContainer = styled.View`
    background-color: #eeeeee;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-horizontal: 20px;
    border-radius: 15px;
`;

const WelcomeText = styled.Text`
    color: black;
    font-size: 25px;
`;
const Name = styled(WelcomeText)`
    font-weight: bold;
`;

const ProfilePicture = styled(Image)`
    border-radius: 50px;
    width: 60px;
    height: 60px;
    background-color: ${colors.grey[100]};
`;

const SectionTitle = styled.Text`
    font-size: 17px;
    margin-bottom: 7px;
`;

const Home = ({ currentUser, appointments }) => {
    const navigation = useNavigation();
    return (
        <SafeAreaScreen>
            <Container>
                <ProfileContainer>
                    <WelcomeContainer>
                        <WelcomeText>Welcome back,</WelcomeText>
                        <Name>{currentUser?.fullName}</Name>
                    </WelcomeContainer>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate(SCREENS.PROFILE)}>
                        {currentUser?.profileUrl ? (
                            <ProfilePicture
                                source={{
                                    uri: currentUser?.profileUrl,
                                }}></ProfilePicture>
                        ) : (
                            <View style={styles.profileNoPhotoContainer}>
                                <ProfileFillIcon
                                    color={colors.grey[900]}
                                    size={24}
                                />
                            </View>
                        )}
                    </TouchableOpacity>
                </ProfileContainer>
                <GeneralContainer>
                    <Appointments>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 5,
                            }}>
                            <PawFillIcon size={20} color={colors.white} />
                            <AppointmentText>Next appointment</AppointmentText>
                        </View>
                        <AppointmentDetailsText>
                            {appointments && appointments.length
                                ? "Appointments"
                                : "No appointments yet"}
                        </AppointmentDetailsText>
                    </Appointments>
                    <Calendar
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate(SCREENS.CALENDAR)}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={IMAGES.CALENDAR_HOME}></Image>
                    </Calendar>
                </GeneralContainer>

                <SectionTitle>Places</SectionTitle>
                <View
                    style={{
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-between",
                        marginBottom: 20,
                        gap: 30,
                        flex: 1,
                    }}>
                    {Places.map((place, id) => (
                        <View style={{ flex: 1 }} key={id}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: colors.grey[100],
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: 5,
                                    borderRadius: 15,
                                    aspectRatio: 1,
                                }}
                                onPress={() =>
                                    navigation.navigate(SCREENS.MAP)
                                }>
                                <Image
                                    style={{
                                        height: 70,
                                        aspectRatio: 1,
                                    }}
                                    source={place.image}></Image>
                            </TouchableOpacity>
                            <PlaceTitle>{place.title}</PlaceTitle>
                        </View>
                    ))}
                </View>
                <SectionTitle>Development</SectionTitle>
                <GeneralContainer>
                    <DevelopmentContainer
                        onPress={() => navigation.navigate(SCREENS.QUICK_INFO)}>
                        <Image
                            style={{ aspectRatio: 1, flex: 1 }}
                            source={IMAGES.RESOURCES_HOME}></Image>
                        <Text
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 16,
                            }}>
                            Resources
                        </Text>
                    </DevelopmentContainer>
                    <DevelopmentContainer
                        onPress={() => navigation.navigate(SCREENS.QUICK_INFO)}>
                        <Image
                            style={{ aspectRatio: 1, flex: 1 }}
                            source={IMAGES.DOG_HOME}></Image>
                        <Text
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 16,
                            }}>
                            Training Tips
                        </Text>
                    </DevelopmentContainer>
                </GeneralContainer>

                <GeneralContainer>
                    <CommunityContainer>
                        <View style={{ paddingVertical: 30 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                                Join our amazing {"\n"}Pet Community!
                            </Text>

                            <TouchableOpacity
                                style={{
                                    padding: 10,
                                    alignItems: "center",
                                    backgroundColor: "#679DDB",
                                    borderRadius: 10,
                                    marginTop: 10,
                                }}
                                onPress={() =>
                                    navigation.navigate(SCREENS.COMMUNITY_NAV)
                                }>
                                <Text
                                    style={{
                                        color: "white",
                                        fontSize: 20,
                                        fontWeight: "bold",
                                    }}>
                                    Join Now
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Image
                            style={{ width: 100, height: 120 }}
                            source={IMAGES.COMMUNITY_HOME}></Image>
                    </CommunityContainer>
                </GeneralContainer>
            </Container>
        </SafeAreaScreen>
    );
};

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
        appointments: state.user.appointments,
    };
};

export default connect(mapStateToProps)(Home);
