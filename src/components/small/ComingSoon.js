import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "native-base";

import { colors } from "../../theme";

const ComingSoon = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text} fontSize={24}>
                Coming soon ...
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    text: {
        color: colors.primary[400],
        fontWeight: "bold",
        marginHorizontal: 30,
    },
});

export default ComingSoon;
