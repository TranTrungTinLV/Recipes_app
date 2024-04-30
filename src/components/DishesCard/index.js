import { Image, Text, View } from "react-native"
import styles from './styles'

const DishesCard = ({ style }) => {
    return (
        <View style={[styles.container, style]}>

            <Image style={styles.image} source={{ uri: 'https://s3-alpha-sig.figma.com/img/6d76/9d15/36bd89900daf1d31e299baba4eb26aa0?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m0X0bbkk9jEtn3iMrHn-M3eWn2mCqHDTZ3PDBEiizSNTPrLw8h-Z~O3JJaqMIl7F~czE4UIgdYfb7e28TSJTOzxa5kzwQ96Uf5L02CrnC~m1lahvk4Z25tIJNxQLt7nnhieb8n~PMKi58KWtFofePQz0HFjldGYkn1rbiFKw8c29uE47KW7SUNWfB8QGgrs6csGU0j7gVjGssywUoyDzCADS4dRcShTyDvD4QvtmE01MpsF1lQNJwDmmztOSngIbOrGCzPmD~ELSnd1mvaKxJh0hzT-1p9~Y0ZXTF040xkz1TIcMQf5CDPomkPpmK9sB0ODm0zzg9VNXUlYgDguO9g__' }} />
            <Text style={styles.text}>Classic Greek Salad</Text>

            <View style={styles.footer}>
            <Text style={{ color: 'rgba(169, 169, 169, 1)', fontSize: 11 }}>Time</Text>
            <Text style={{ color: 'rgba(72, 72, 72, 1)', fontWeight: '600' }}>15 Mins</Text>
            </View>


        </View>
    )
}

export default DishesCard;