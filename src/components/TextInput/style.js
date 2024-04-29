import { StyleSheet } from "react-native";
import colors from '../../constants/colors'
const styles = StyleSheet.create({
    input: {
        color: colors.greyDark,
        fontSize: 14,
        marginLeft: 20,
        flex: 1,
    },
    icon: {
        width: 16,
        height: 16,
        position: 'absolute',
        marginLeft: 10,
        marginTop: 10,
    },
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.grey,
    }
})

export default styles;