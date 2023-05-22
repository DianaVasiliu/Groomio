import React from "react";
import { Text, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import SafeAreaScreen from "../SafeAreaScreen";

import styled from "styled-components/native";

import LottieView from "lottie-react-native";

const Title = styled.Text`
    color: #ed865a;
    font-size: 45px;
    text-align: center;
    font-weight: bold;
    margin-vertical:35px;
`;

const AnimationContainer = styled.View`
    width: 100%;
    height: ${windowHeight * 0.45}px;
    align-items: center;
    justify-content: flex-end;
`;
const Animation = styled(LottieView)`
    height: ${windowHeight * 0.4}px;
`;

const Button = styled.TouchableOpacity`
    width: 85%;
    background-color: black;
    border-radius:100%;
    padding: 14px;
    margin-vertical:5px;
`;

const ButtonText = styled.Text`
    color: white;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    
`;

const ButtonsContainer = styled.View`
flex: 1;
height: ${windowHeight * 0.3}px;
align-items: center;
justify-content: center;

`;
const Landing = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaScreen>
            <Title>Groomio</Title>
            <AnimationContainer>
                <Animation
                    source={require("../../../assets/animations/pet-caring.json")}
                />
            </AnimationContainer>
            <ButtonsContainer>
            <Button onPress={() => navigation.navigate("Login")} activeOpacity={0.7}>
                <ButtonText>LOGIN</ButtonText>
            </Button>
            <Button onPress={() => navigation.navigate("Signup")} activeOpacity={0.7}>
            
                <ButtonText>SIGN UP</ButtonText>
            </Button>
            </ButtonsContainer>
        </SafeAreaScreen>
    );
};

export default Landing;
