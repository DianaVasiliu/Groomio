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
                <ScreenTitle hasBackButton title="Account" />
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
                        placeholder="Current Email"
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
