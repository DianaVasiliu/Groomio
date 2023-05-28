import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { logout as logoutAction } from "../../redux/actions/auth";
import SafeAreaScreen from "../SafeAreaScreen";

import { styles } from "./styles";
import { SCREENS } from "../../utils/constants";
import { ScreenTitle } from "../../components/small";
import { LogoutIcon, ProfileFillIcon } from "../../components/icons";
import { colors } from "../../theme";

const Profile = ({ user, logout, navigation }) => {
    const signout = async () => {
        await logout();
    };

    return (
        <SafeAreaScreen>
            <View>
                <ScreenTitle hasBackButton title="Profile" />
                <View style={styles.profileContainer}>
                    <View style={styles.avatarImageContainer}>
                        {user?.photoUrl ? (
                            <Image
                                source={{ uri: user.photoUrl }}
                                style={styles.avatar}
                                resizeMode="contain"
                            />
                        ) : (
                            <ProfileFillIcon color={colors.grey[900]} />
                        )}
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.profileText}>
                            Welcome back,{" "}
                            <Text style={styles.profileTextSmall}>
                                {user.email}
                            </Text>
                        </Text>
                    </View>
                    <View style={{ alignSelf: "flex-end" }}>
                        <TouchableOpacity
                            onPress={signout}
                            style={styles.logoutButton}>
                            <LogoutIcon color={colors.primary[400]} size={24} />
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
                            <Text style={styles.buttonText}>Feedback</Text>
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
