import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";
const { width } = Dimensions.get('screen')
export default styles = StyleSheet.create(
    {
        container: {
            // marginTop: 30,
            // marginBottom: 40,
            flexDirection: 'row',
            alignItems: 'space-between',
            padding: 10,
            width: width * 0.6,
        },
        title: {
            fontSize: 14,
            fontWeight: '600',
            color: colors.darkText,
            marginBottom: 5,
            maxWidth: 130
        },
        text: {
            fontSize: 12,
            fontWeight: '400',
            color: colors.grey,

        },
        row: {
            alignItems: 'center',
        }
    }
)