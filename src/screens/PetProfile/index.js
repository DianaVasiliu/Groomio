import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import SafeAreaScreen from "../SafeAreaScreen";
import { Image } from "expo-image";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
    BackArrowIcon,
    CalendarIcon,
    EditIcon,
    FemaleSymbolIcon,
    MaleSymbolIcon,
    PawFillIcon,
} from "../../components/icons";
import { colors } from "../../theme";

const PetPictureContainer = styled.View`
    position: relative;
    border-radius: 20px;
    aspect-ratio: 1;
    margin-left: 10px;
    margin-right: 10px;
`;
const PetPicture = styled(Image)`
    border-radius: 20px;
    width: 100%;
    height: 100%;
`;
const TopLeftButton = styled.TouchableOpacity`
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
    background-color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
`;
const TopRightButton = styled.TouchableOpacity`
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;
    background-color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
`;
const PetName = styled.Text`
    font-weight: bold;
    font-size: 26px;
    color: #679ddb;
    margin-left: 20px;
    margin-top: 10px;
`;
const PetBreed = styled.Text`
    font-size: 14px;
    color: ${colors.grey[900]};
    margin-left: 20px;
    margin-top: 2px;
`;
const NameAndGenderContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;
const GenderContainer = styled.View`
    background-color: ${colors.grey[100]};
    width: 50px;
    height: 50px;
    align-items: center;
    border-radius: 50px;
    justify-content: center;
    margin-right: 20px;
`;
const AgeAndWeightContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;
const AgeAndWeightTitle = styled.Text`
    color: #ed865a;
    font-weight: bold;
    font-size: 16px;
    padding-bottom: 6px;
`;
const AgeAndWeightDetails = styled.Text`
    color: ${colors.grey[900]};
    font-size: 14px;
`;
const AgeContainer = styled.View`
    background-color: ${colors.grey[100]};
    width: 45%;
    margin-left: 10px;
    border-radius: 10px;
    height: 75px;
    align-items: center;
    justify-content: center;
`;
const WeightContainer = styled.View`
    background-color: #eeeeee;
    width: 45%;
    margin-right: 10px;
    border-radius: 10px;
    height: 75px;
    align-items: center;
    justify-content: center;
`;
const Separator = styled.View`
    background-color: ${colors.secondary[400]};
    width: 0.5%;
    height: 70%;
`;
const SpeciesContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 10px;
`;
const SpeciesAndBirthTitle = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 48%;
    padding-left: 20px;
    gap: 20px;
`;
const SpeciesAndBirthDetails = styled.Text`
    margin-right: 20px;
    color: #555555;
    font-size: 14px;
`;
const BirthContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;
const UpcomingEvents = styled.Text`
    margin-left: 20px;
    margin-top: 20px;
    color: #a3c7f1;
    font-size: 18px;
    font-weight: bold;
`;
const GeneralEventContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin-top: 10px;
    margin-left: 10px;
`;
const FoodColor = styled.View`
    width: 3%;
    background-color: #ffbe9a;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    height: 60px;
`;
const FoodContainer = styled.View`
    width: 94.5%;
    background-color: #eeeeee;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    height: 60px;
    justify-content: center;
    padding-left: 10px;
`;
const MedicationColor = styled.View`
    width: 3%;
    background-color: #bce9ec;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    height: 60px;
`;
const MedicationContainer = styled.View`
    width: 94.5%;
    background-color: #eeeeee;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    height: 60px;
    justify-content: center;
    padding-left: 10px;
`;
const AppointmentColor = styled.View`
    width: 3%;
    background-color: #ffdf71;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    height: 60px;
`;
const AppointmentContainer = styled.View`
    width: 94.5%;
    background-color: #eeeeee;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    height: 60px;
    justify-content: center;
    padding-left: 10px;
`;

const PetProfile = () => {
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
    };

    const route = useRoute();
    const { item } = route.params;

    const isMale = item.gender.charAt(0).toLowerCase() === "m";
    const genderColor = isMale ? colors.blue : colors.pink;

    const birthDate = item.birthDate;
    const birthTime =
        birthDate.seconds * 1000 + birthDate.nanoseconds / 1000000;

    const currentTime = Date.now();
    const ageInMilliseconds = currentTime - birthTime;
    const ageInYears = Math.round(
        ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25),
    );
    const ageInMonths = Math.floor(
        ageInMilliseconds / (1000 * 60 * 60 * 24 * 30.4375),
    );

    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(birthTime).toLocaleDateString(
        "en-US",
        options,
    );

    return (
        <SafeAreaScreen>
            <PetPictureContainer>
                <PetPicture source={{ uri: item.photoUrl }} />
                <TopLeftButton onPress={handleGoBack}>
                    <BackArrowIcon size={28} color={colors.primary[400]} />
                </TopLeftButton>

                <TopRightButton>
                    <EditIcon size={24} color={colors.primary[400]} />
                </TopRightButton>
            </PetPictureContainer>
            <NameAndGenderContainer>
                <View>
                    <PetName>{item.name}</PetName>
                    <PetBreed>{item.breed}</PetBreed>
                </View>
                <GenderContainer>
                    {isMale ? (
                        <MaleSymbolIcon size={40} color={genderColor} />
                    ) : (
                        <FemaleSymbolIcon size={40} color={genderColor} />
                    )}
                </GenderContainer>
            </NameAndGenderContainer>

            <AgeAndWeightContainer>
                <AgeContainer>
                    <AgeAndWeightTitle>Age</AgeAndWeightTitle>
                    {ageInYears >= 1 ? (
                        <AgeAndWeightDetails>
                            {ageInYears} years
                        </AgeAndWeightDetails>
                    ) : (
                        <AgeAndWeightDetails>
                            {ageInMonths} months
                        </AgeAndWeightDetails>
                    )}
                </AgeContainer>
                <Separator />
                <WeightContainer>
                    <AgeAndWeightTitle>Weight</AgeAndWeightTitle>
                    <AgeAndWeightDetails>{item.weight} kg</AgeAndWeightDetails>
                </WeightContainer>
            </AgeAndWeightContainer>
            <SpeciesContainer>
                <SpeciesAndBirthTitle>
                    <PawFillIcon color={colors.primary[400]} size={24} />
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 16,
                        }}>
                        Species
                    </Text>
                </SpeciesAndBirthTitle>
                <SpeciesAndBirthDetails>
                    <Text>{item.species}</Text>
                </SpeciesAndBirthDetails>
            </SpeciesContainer>
            <BirthContainer>
                <SpeciesAndBirthTitle>
                    <CalendarIcon color={colors.primary[400]} size={24} />
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 16,
                        }}>
                        Birth date
                    </Text>
                </SpeciesAndBirthTitle>
                <SpeciesAndBirthDetails>
                    <Text>{formattedDate}</Text>
                </SpeciesAndBirthDetails>
            </BirthContainer>
            <UpcomingEvents>Upcoming events</UpcomingEvents>
            <GeneralEventContainer>
                <FoodColor></FoodColor>
                <FoodContainer>
                    <Text style={{ fontWeight: "bold", paddingBottom: 3 }}>
                        Food
                    </Text>
                    <Text style={{ color: "#555555" }}>29 May 2023, 19:00</Text>
                </FoodContainer>
            </GeneralEventContainer>
            <GeneralEventContainer>
                <MedicationColor></MedicationColor>
                <MedicationContainer>
                    <Text style={{ fontWeight: "bold", paddingBottom: 3 }}>
                        Medication
                    </Text>
                    <Text style={{ color: "#555555" }}>29 May 2023, 19:30</Text>
                </MedicationContainer>
            </GeneralEventContainer>
            <GeneralEventContainer>
                <AppointmentColor></AppointmentColor>
                <AppointmentContainer>
                    <Text style={{ fontWeight: "bold", paddingBottom: 3 }}>
                        Vet appointment
                    </Text>
                    <Text style={{ color: "#555555" }}>
                        29 June 2023, 14:30
                    </Text>
                </AppointmentContainer>
            </GeneralEventContainer>
        </SafeAreaScreen>
    );
};

export default PetProfile;
