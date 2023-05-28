import React from "react";

import SafeAreaScreen from "../SafeAreaScreen";
import { ComingSoon, ScreenTitle } from "../../components/small";

import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { CustomTextInput, LoadingIndicator } from "../../components/small";

import { styles } from "./styles";

const EditAccount = ({ navigation }) => {
    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaScreen>
            <View>
                <View style={styles.header}>
                    <View style={styles.circle}>
                        <TouchableOpacity onPress={handleBackPress}>
                            <Image
                                source={require("../../../assets/images/profile-images/Back.png")}
                                style={styles.circleIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.heading}>Account</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.subheading}>Name</Text>
                    <CustomTextInput
                        placeholder="Name"
                        // value={email}
                        // onChangeText={text => {
                        //     setEmail(text);
                        //     setError(null);
                        // }}
                        style={styles.input}
                        type="email"
                        autoCapitalize="none"
                    />
                    <Text style={styles.subheading}>Email</Text>
                    <CustomTextInput
                        placeholder="CurrentEmail"
                        // value={password}
                        // onChangeText={text => {
                        //     setPassword(text);
                        //     setError(null);
                        // }}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>SAVE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaScreen>
    );
};

export default EditAccount;
