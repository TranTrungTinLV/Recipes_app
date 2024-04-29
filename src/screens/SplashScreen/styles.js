import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
export const styles = StyleSheet.create({
    container: {
        // backgroundColor: colors.greenDark,
        flex: 1,
        padding: 15,
        flexDirection: 'column',
        alignContent: 'space-between',
        justifyContent: 'space-between'
    },
    icon: {
        width: 79,
        height: 79,
        alignSelf: 'center'
    },
    text: {
        color: colors.white,
        fontSize: 20,
        // textAlign: 'center'
    },
    groupHeader: {
        gap: 14,
        // marginRight: 81,
        padding: 65,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center'
    },
    TitleBody: {
        alignItems: 'center',
        gap: 20
    }
})