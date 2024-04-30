import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('screen')
const styles = StyleSheet.create({
    container: {
        width: width * 0.7,
        marginTop: 20,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        shadowRadius: 'black',
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
    avatar: {
        width: 25,
        height: 25,
        borderRadius: 20,
        marginRight: 8,
    },
    text_avatar: {
        color: colors.grey,
        fontWeight: '400',
        fontSize: 11
    },
    setTime: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginRight: 9
        // justifyContent: 'center'
    },
    byUser: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    footer: {
        // gap: 10,
        // marginBottom: 10,
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.darkText,
        marginBottom: 5,
        maxWidth: 130
    },
    stars: {
        flexDirection: 'row'
    }
})

export default styles;