import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen')
export default styles = StyleSheet.create(
    {
        container: {
            width: width * 0.5,
            // height: 170,
            marginTop: 70,

            backgroundColor: 'white',
            padding: 10,
            borderRadius: 10,
            shadowRadius: 'black',
            marginVertical: 32,
            marginTop: 60,
            marginRight: 16,
            borderWidth: 0.5,
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            //android using
            elevation: 9,
            marginRight: 16
        },
        header: {
            alignItems: 'center'
        },
        footer: {
            marginTop: 20,
            marginBottom: 10,
            marginLeft: 15
        },
        image: { width: 109, height: 110, borderRadius: 75, marginTop: -68, alignSelf: 'center' },
        text: {
            marginTop: 11, maxWidth: 130, fontSize: 18, textAlign: 'center',marginHorizontal: 20
        }
    }
)