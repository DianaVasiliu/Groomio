import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import SafeAreaScreen from "../SafeAreaScreen";
import { Image } from "expo-image";
import { Foundation } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import { BackArrowIcon } from "../../components/icons";
import { EvilIcons } from '@expo/vector-icons'; 

const PetPictureContainer = styled.View`
  position: relative;
  border-radius: 20px;
  width: 370px;
  height: 270px;
  margin-left: 10px;
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
  width:50px;
  height: 50px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;

const ArrowIcon = styled.Image`
width: 40px;
height: 40px;
`
const EditIcon = styled.Image`
width: 24px;
height: 24px;
`

const TopRightButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
  background-color: white;
  width:50px;
  height: 50px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;

const PetName = styled.Text`
    font-weight: bold;
    font-size: 26px;
    color: #679DDB; 
    margin-left: 20px;
    margin-top: 10px;
`;

const PetBreed = styled.Text`
    font-size: 14px;
    color: #555555; 
    margin-left: 20px;
    margin-top: 2px;
`;

const NameAndGenderContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 10px;
`
const GenderContainer = styled.View`
background-color: #EEEEEE;
width: 50px;
height: 50px;
align-items: center;
border-radius: 50px;
justify-content: center;
margin-right: 20px;
`
const AgeAndWeightContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 10px;
`

const AgeAndWeightTitle = styled.Text`
color: #ED865A;
font-weight: bold;
font-size:14px;
padding-bottom: 6px;
`

const AgeAndWeightDetails = styled.Text`
color: #555555;
font-size:14px;
`

const AgeContainer = styled.View`
background-color: #EEEEEE;
width: 45%;
margin-left: 10px;
border-radius: 10px;
height: 75px;
align-items: center;
justify-content: center;
`
const WeightContainer = styled.View`
background-color: #EEEEEE;
width: 45%;
margin-right: 10px;
border-radius: 10px;
height: 75px;
align-items: center;
justify-content: center;
`

const Separator = styled.View`
background-color: #ED865A;
width: 0.3%;
height: 50px;
`

const SpeciesContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 10px;
`
const PawPicture = styled(Image)`
    width: 22px;
    height: 22px;
    margin-left:20px;
`;

const SpeciesAndBirthTitle = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: start;
margin-top: 10px;
width: 48%;
`
const SpeciesAndBirthDetails = styled.Text`
margin-right: 20px;
color: #555555;
font-size: 14px;
`
const BirthContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 10px;
`

const CalendarPicture = styled(Image)`
    width: 24px;
    height: 24px;
    margin-left:20px;
`;

const UpcomingEvents = styled.Text`
margin-left: 20px;
margin-top: 20px;
color: #A3C7F1;
font-size: 18px;
font-weight: bold;
`
const GeneralEventContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: start;
margin-top: 10px;
margin-left: 10px;
`

const FoodColor = styled.View`
width: 3%;
background-color: #FFBE9A;
border-bottom-left-radius: 10px;
border-top-left-radius: 10px;
height: 60px;
`

const FoodContainer = styled.View`
width: 94.5%;
background-color: #EEEEEE;
border-bottom-right-radius: 10px;
border-top-right-radius: 10px;
height: 60px;
justify-content: center;
padding-left: 10px;
`

const MedicationColor = styled.View`
width: 3%;
background-color: #BCE9EC;
border-bottom-left-radius: 10px;
border-top-left-radius: 10px;
height: 60px;
`

const MedicationContainer = styled.View`
width: 94.5%;
background-color: #EEEEEE;
border-bottom-right-radius: 10px;
border-top-right-radius: 10px;
height: 60px;
justify-content: center;
padding-left: 10px;
`
const AppointmentColor = styled.View`
width: 3%;
background-color: #FFDF71;
border-bottom-left-radius: 10px;
border-top-left-radius: 10px;
height: 60px;
`

const AppointmentContainer = styled.View`
width: 94.5%;
background-color: #EEEEEE;
border-bottom-right-radius: 10px;
border-top-right-radius: 10px;
height: 60px;
justify-content: center;
padding-left: 10px;
`



const PetProfile = ({}) => {
    const navigation = useNavigation();
    const handleGoBack = () => {
      navigation.goBack();
    };

    const route = useRoute();
    const { item } = route.params;

    const isMale = item.gender.charAt(0).toLowerCase() === "m";
    const genderColor = isMale ? "#679DDB" : "#ED91C4";

    const birthDate = item.birthDate;
    const birthTime = birthDate.seconds * 1000 + birthDate.nanoseconds / 1000000;
    
    const currentTime = Date.now();
    const ageInMilliseconds = currentTime - birthTime;
    const ageInYears = Math.round(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
    const ageInMonths = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 30.4375));
    
    var options = {  year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(birthTime).toLocaleDateString("en-US", options);

    return (
        <SafeAreaScreen>
            <PetPictureContainer>
                <PetPicture source={{ uri: item.photoUrl }}></PetPicture>
                <TopLeftButton onPress={handleGoBack}>
                    {/* <ArrowIcon source={require("../../../assets/images/arrow.png")}></ArrowIcon> */}
                    <BackArrowIcon size={28} color="#679DDB" />
                </TopLeftButton>

                <TopRightButton>
                    <EvilIcons name="pencil" size={32} color="#679DDB" />
                     {/* <EditIcon source={require("../../../assets/images/edit.png")}></EditIcon>  */}
                </TopRightButton>

            </PetPictureContainer>
            <NameAndGenderContainer>
                <View>
                    <PetName>{item.name}</PetName>
                    <PetBreed>{item.breed}</PetBreed>
                </View>
                <GenderContainer>
                {isMale ? (
                    <Foundation name="male-symbol" size={40} color={genderColor} />
                ) : (
                    <Foundation name="female-symbol" size={40} color={genderColor} />
                )}
                </GenderContainer>
            </NameAndGenderContainer>

            <AgeAndWeightContainer>
                <AgeContainer>
                    <AgeAndWeightTitle>Age</AgeAndWeightTitle>
                    {ageInYears >= 1 ?(
                    <AgeAndWeightDetails>{ageInYears} years</AgeAndWeightDetails>
                    ) :(
                        <AgeAndWeightDetails>{ageInMonths} months</AgeAndWeightDetails>
                    )
                }
                    
                </AgeContainer>
                <Separator></Separator>
                <WeightContainer>
                    <AgeAndWeightTitle>Weight</AgeAndWeightTitle>
                    <AgeAndWeightDetails>{item.weight} kg</AgeAndWeightDetails>
                </WeightContainer>
            </AgeAndWeightContainer>
            <SpeciesContainer>
                <SpeciesAndBirthTitle>
                    <PawPicture source={require("../../../assets/images/paw.png")}></PawPicture>
                    <Text style= {{marginLeft:10, fontWeight:"bold", fontSize:12}}>Species</Text>
                </SpeciesAndBirthTitle>
                <SpeciesAndBirthDetails>
                    <Text>{item.species}</Text>
                </SpeciesAndBirthDetails>
            </SpeciesContainer>
            <BirthContainer>
            <SpeciesAndBirthTitle>
                    <CalendarPicture source={require("../../../assets/images/calendar.png")}></CalendarPicture>
                    <Text style= {{marginLeft:10, fontWeight:"bold", fontSize:12}}>Birth date</Text>
                </SpeciesAndBirthTitle>
                <SpeciesAndBirthDetails>
                    <Text>{formattedDate}</Text>
                </SpeciesAndBirthDetails>
            </BirthContainer>
            <UpcomingEvents>Upcoming events</UpcomingEvents>
            <GeneralEventContainer>
                <FoodColor></FoodColor>
                <FoodContainer>
                    <Text style = {{fontWeight:"bold", paddingBottom:3}}>Food</Text>
                    <Text style = {{color:"#555555"}}>29 May 2023, 19:00</Text>
                </FoodContainer>
            </GeneralEventContainer>
            <GeneralEventContainer>
                <MedicationColor></MedicationColor>
                <MedicationContainer>
                    <Text style = {{fontWeight:"bold", paddingBottom:3}}>Medication</Text>
                    <Text style = {{color:"#555555"}}>29 May 2023, 19:30</Text>
                </MedicationContainer>
            </GeneralEventContainer>
            <GeneralEventContainer>
                <AppointmentColor></AppointmentColor>
                <AppointmentContainer>
                    <Text style = {{fontWeight:"bold", paddingBottom:3}}>Vet appointment</Text>
                    <Text style = {{color:"#555555"}}>29 June 2023, 14:30</Text>
                </AppointmentContainer>
            </GeneralEventContainer>
        </SafeAreaScreen>
    );
};

export default PetProfile;
