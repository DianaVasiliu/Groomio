import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

import SafeAreaScreen from "../SafeAreaScreen";
import { SCREENS } from "../../utils/constants";
import { PetCaring } from "../../components/small/animations";
import { colors } from "../../theme";

const Title = styled.Text`
    color: ${colors.secondary[400]};
    font-size: 45px;
    text-align: center;
    font-weight: bold;
    margin-vertical: 35px;
`;

const Button = styled.TouchableOpacity`
    width: 85%;
    background-color: black;
    border-radius: 100%;
    padding: 14px;
    margin-vertical: 5px;
`;

const ButtonText = styled.Text`
    color: white;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`;

const ButtonsContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Landing = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaScreen>
            <Title>Groomio</Title>
            <PetCaring />
            <ButtonsContainer>
                <Button
                    onPress={() => navigation.navigate(SCREENS.LOGIN)}
                    activeOpacity={0.7}>
                    <ButtonText>LOGIN</ButtonText>
                </Button>
                <Button
                    onPress={() => navigation.navigate(SCREENS.SIGNUP)}
                    activeOpacity={0.7}>
                    <ButtonText>SIGN UP</ButtonText>
                </Button>
            </ButtonsContainer>
        </SafeAreaScreen>
    );
};

export default Landing;
