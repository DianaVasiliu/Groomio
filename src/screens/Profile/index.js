import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { logout as logoutAction } from "../../redux/actions/auth";
import SafeAreaScreen from "../SafeAreaScreen";

import { styles } from "./styles";
import ProfileImage from "../../../assets/images/profile-images/Profile-Image.png";
import { SCREENS } from "../../utils/constants";
import LogoutIcon from "../../../assets/images/profile-images/Logout.png";

const Profile = ({ user, logout, navigation }) => {
    const { t } = useTranslation();

    const signout = async () => {
        await logout();
    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaScreen>
            <View>
                <View style={styles.header}>
                    <View style={styles.headercircle}>
                        <TouchableOpacity onPress={handleBackPress}>
                            <Image
                                source={require("../../../assets/images/profile-images/Back.png")}
                                style={styles.headerCircleIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.heading}>Profile</Text>
                </View>
                <View style={styles.profileContainer}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={ProfileImage}
                            style={styles.avatar}
                            resizeMode="contain"
                        />
                        <Text style={styles.profileText}>
                            Welcome back, {"\n"} {user.email}
                        </Text>
                        <TouchableOpacity
                            title="Logout"
                            onPress={signout}
                            style={styles.logoutButton}>
                            <Image
                                source={require("../../../assets/images/profile-images/Logout.png")}
                                style={styles.logoutIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.subheading}>Settings</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate(SCREENS.EDIT_ACCOUNT);
                        }}>
                        <View style={styles.buttonContent}>
                            <View style={styles.circle}>
                                <Image
                                    source={require("../../../assets/images/profile-images/Account.png")}
                                    style={styles.circleIcon}
                                />
                            </View>
                            <Text style={styles.buttonText}>Account</Text>
                        </View>
                        <Image
                            source={require("../../../assets/images/profile-images/Arrow.png")}
                            style={styles.arrowIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.buttonContent}>
                            <View style={styles.circle}>
                                <Image
                                    source={require("../../../assets/images/profile-images/Language.png")}
                                    style={styles.circleIcon}
                                />
                            </View>
                            <Text style={styles.buttonText}>Language</Text>
                        </View>
                        <Image
                            source={require("../../../assets/images/profile-images/Arrow.png")}
                            style={styles.arrowIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.buttonContent}>
                            <View style={styles.circle}>
                                <Image
                                    source={require("../../../assets/images/profile-images/DarkMode.png")}
                                    style={styles.circleIcon}
                                />
                            </View>
                            <Text style={styles.buttonText}>Dark Mode</Text>
                        </View>
                        <Image
                            source={require("../../../assets/images/profile-images/Arrow.png")}
                            style={styles.arrowIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.buttonContent}>
                            <View style={styles.circle}>
                                <Image
                                    source={require("../../../assets/images/profile-images/Security.png")}
                                    style={styles.circleIcon}
                                />
                            </View>
                            <Text style={styles.buttonText}>
                                Login & Security
                            </Text>
                        </View>
                        <Image
                            source={require("../../../assets/images/profile-images/Arrow.png")}
                            style={styles.arrowIcon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.subheading}>Support</Text>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.buttonContent}>
                            <View style={styles.circle}>
                                <Image
                                    source={require("../../../assets/images/profile-images/Feedback.png")}
                                    style={styles.circleIcon}
                                />
                            </View>
                            <Text style={styles.buttonText}>Account</Text>
                        </View>
                        <Image
                            source={require("../../../assets/images/profile-images/Arrow.png")}
                            style={styles.arrowIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaScreen>
    );
};

const mapStateToProps = state => {
    return {
        user: state.auth.currentUser,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logoutAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
