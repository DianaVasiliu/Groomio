import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { Text, View, Toast } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";

import SafeAreaScreen from "../SafeAreaScreen";
import {
    CustomButton,
    CustomDateTimePicker,
    CustomSelect,
    CustomTextInput,
    ErrorMessage,
    LoadingIndicator,
    PetCategoryCarousel,
    ScreenTitle,
} from "../../components/small";
import { FemaleSymbolIcon, MaleSymbolIcon } from "../../components/icons";
import { ToastAlert, CustomImagePicker } from "../../components/medium";
import { colors } from "../../theme";
import { styles } from "./styles";
import { addPet } from "../../redux/actions/user";

const AddPet = ({ addPetToCurrentUser }) => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);

    const genders = [
        {
            label: t("male"),
            value: "m",
            leftIcon: <MaleSymbolIcon color={colors.blue} size={30} />,
        },
        {
            label: t("female"),
            value: "f",
            leftIcon: <FemaleSymbolIcon color={colors.pink} size={30} />,
        },
    ];

    const initialValues = {
        name: "",
        gender: "m",
        breed: "",
        species: "",
        type: "",
        weight: null,
        birthDate: new Date(),
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(t("required")),
        gender: Yup.string().oneOf(["m", "f"]).required(t("required")),
        breed: Yup.string().required(t("required")),
        species: Yup.string().required(t("required")),
        type: Yup.string().required(t("required")),
        weight: Yup.number().required(t("required")),
        birthDate: Yup.date().required(t("required")),
    });

    const onSubmit = async values => {
        setLoading(true);
        addPetToCurrentUser(values, image)
            .then(() => {
                setLoading(false);
                Toast.show({
                    render: () => (
                        <ToastAlert
                            title={t("pet-added-successfully")}
                            status="success"
                        />
                    ),
                });
                navigation.goBack();
            })
            .catch(e => {
                console.error(e);
                setLoading(false);
                Toast.show({
                    render: () => (
                        <ToastAlert
                            title={t("pet-could-not-add")}
                            status="danger"
                        />
                    ),
                });
            });
    };

    return (
        <SafeAreaScreen>
            <LoadingIndicator isLoading={loading} />

            <ScreenTitle title={t("add-pet")} hasBackButton />
            {/* TODO: upload photo */}

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {({
                    errors,
                    values,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                }) => (
                    <View style={styles.formContainer}>
                        <View style={styles.container}>
                            <View style={{ flex: 0.6 }}>
                                <CustomTextInput
                                    name="name"
                                    label={t("name")}
                                    value={values.name}
                                    onChangeText={handleChange("name")}
                                    required
                                />
                                <ErrorMessage text={errors.name} />
                            </View>
                            <View style={{ flex: 0.4 }}>
                                <CustomSelect
                                    name="gender"
                                    label={t("gender")}
                                    items={genders}
                                    onValueChange={handleChange("gender")}
                                    selectedValue={values.gender}
                                    required
                                />
                                <ErrorMessage text={errors.gender} />
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={{ flex: 0.5 }}>
                                <CustomTextInput
                                    name="breed"
                                    label={t("breed")}
                                    value={values.breed}
                                    onChangeText={handleChange("breed")}
                                    required
                                />
                                <ErrorMessage text={errors.breed} />
                            </View>
                            <View style={{ flex: 0.5 }}>
                                <CustomTextInput
                                    name="species"
                                    label={t("species")}
                                    value={values.species}
                                    onChangeText={handleChange("species")}
                                    required
                                />
                                <ErrorMessage text={errors.species} />
                            </View>
                        </View>
                        <View>
                            <View>
                                <View style={styles.labelContainer}>
                                    <Text
                                        style={styles.categoryText}
                                        fontSize={20}>
                                        {t("category")}
                                    </Text>
                                    <Text style={styles.required} fontSize={14}>
                                        *
                                    </Text>
                                </View>
                                <PetCategoryCarousel
                                    onSelect={handleChange("type")}
                                    selected={values.type}
                                />
                                <ErrorMessage
                                    text={errors.type}
                                    style={{ marginLeft: 35 }}
                                />
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={{ flex: 1 }}>
                                <CustomTextInput
                                    name="weight"
                                    label={t("weight")}
                                    value={values.weight}
                                    onChangeText={handleChange("weight")}
                                    keyboardType="numeric"
                                    maxLength={6}
                                    required
                                />
                                <ErrorMessage text={errors.weight} />
                            </View>
                            <View>
                                <CustomDateTimePicker
                                    name="birthDate"
                                    value={values.birthDate}
                                    placeholder={t("birth-date")}
                                    onChange={val =>
                                        setFieldValue("birthDate", val)
                                    }
                                    required
                                />
                                <ErrorMessage text={errors.birthDate} />
                            </View>
                        </View>

                        <CustomImagePicker image={image} onChange={setImage} />

                        <CustomButton
                            text={t("add")}
                            onPress={handleSubmit}
                            style={styles.submitButton}
                        />
                    </View>
                )}
            </Formik>
        </SafeAreaScreen>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        addPetToCurrentUser: (info, img) => dispatch(addPet(info, img)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPet);
