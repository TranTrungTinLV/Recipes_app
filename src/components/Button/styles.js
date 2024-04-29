import { Dimensions,StyleSheet } from "react-native";
import colors from "../../constants/colors";

const {width} = Dimensions.get('screen')
export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.greenDark,
        // flex: 1,
        width: width /2,
        alignSelf: 'center',
        // marginLeft: 68,
        padding: 15,
        borderRadius: 10,
        marginBottom: 50
    },
    text: {
        color: colors.white,
        fontSize: 16,
        textAlign: 'center'
    }
})