import React from "react";
import { Image, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import SafeAreaScreen from "../SafeAreaScreen";

import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { SCREENS } from "../../utils/constants";
import { IMAGES } from "../../utils/images";
import { colors } from "../../theme";
import { ProfileFillIcon } from "../../components/icons";
import { styles } from "./styles";

const Places = [
    {
        title: "Pet Shops",
        image: require("../../../assets/images/home-images/store.png"),
    },
    {
        title: "Vets",
        image: require("../../../assets/images/home-images/medicine.png"),
    },
    {
        title: "Pet Friendly\n     Places",
        image: require("../../../assets/images/home-images/petfriendly.png"),
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

const Place = styled.View`
    padding: 20px;
    background-color: #eeeeee;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`;
const PlaceTitle = styled.Text`
    color: grey;
    font-weight: bold;
    margin-top: 3px;
`;
const DevelopmentContainer = styled.View`
    background-color: black;
    padding-vertical: 16px;
    padding-horizontal: 14px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
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
                        <Name>{currentUser.fullName}</Name>
                    </WelcomeContainer>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate(SCREENS.PROFILE)}>
                        {currentUser.profileUrl ? (
                            <ProfilePicture
                                source={{
                                    uri: currentUser.profileUrl,
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
                <SectionTitle>Event updates</SectionTitle>
                <GeneralContainer>
                    <Appointments>
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={require("../../../assets/images/home-images/cat_footprint.png")}></Image>
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
                <GeneralContainer>
                    {Places.map((place, id) => (
                        <View key={id} style={{ alignItems: "center" }}>
                            <Place>
                                <Image
                                    style={{ width: 60, height: 60 }}
                                    source={place.image}></Image>
                            </Place>
                            <PlaceTitle>{place.title}</PlaceTitle>
                        </View>
                    ))}
                </GeneralContainer>
                <SectionTitle>Development</SectionTitle>
                <GeneralContainer>
                    <DevelopmentContainer>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={IMAGES.RESOURCES_HOME}></Image>
                        <Text
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 18,
                            }}>
                            Resources
                        </Text>
                    </DevelopmentContainer>
                    <DevelopmentContainer>
                        <Image
                            style={{ width: 35, height: 35 }}
                            source={IMAGES.DOG_HOME}></Image>
                        <Text
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 18,
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
                                }}>
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
