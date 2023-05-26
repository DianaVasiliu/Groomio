import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { ScrollView, Text, View } from "native-base";

import { styles } from "./styles";
import SafeAreaScreen from "../SafeAreaScreen";
import { SCREENS } from "../../utils/constants";
import { PetCaring } from "../../components/small/animations";
import { colors } from "../../theme";

const Title = styled.Text`
    color: ${colors.secondary[400]};
    font-size: 45px;
    text-align: center;
    font-weight: bold;
`;

const Button = styled.TouchableOpacity`
    width: 85%;
    background-color: black;
    border-radius: 100px;
    padding: 14px;
    margin-vertical: 5px;
`;

const ButtonText = styled.Text`
    color: white;
    font-size: 16px;
    text-align: center;
    font-weight: bold;
`;

const ButtonsContainer = styled.View`
    align-items: center;
    justify-content: center;
`;

const Landing = () => {
    const navigation = useNavigation();
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 50 }}
            style={{ backgroundColor: colors.white, flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.titleAnimationContainer}>
                    <View
                        style={{
                            backgroundColor: colors.grey[100],
                            margin: 10,
                            borderRadius: 30,
                            alignItems: "center",
                            paddingTop: 30,
                        }}>
                        <PetCaring />
                    </View>
                </View>
                <View
                    style={{
                        alignItems: "center",
                        gap: 15,
                        width: "85%",
                        alignSelf: "center",
                    }}>
                    <Text
                        style={{
                            fontWeight: "bold",
                            color: colors.primary[900],
                            textAlign: "center",
                        }}
                        fontSize={30}>
                        Discover the best pet caring app
                    </Text>
                    <Text
                        style={{
                            color: colors.grey[900],
                            textAlign: "center",
                        }}
                        fontSize={16}>
                        Taking care of your pet has never been so easy! Explore
                        the app and see how to manage your pets with Groomio.
                    </Text>
                </View>
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
            </View>
        </ScrollView>
    );
};

export default Landing;
