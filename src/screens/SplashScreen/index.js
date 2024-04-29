import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles.js";
import Button from "../../components/Button/index.js";
import colors from "../../constants/colors.js";
const ButtonComponent = ({navigation}) => {
    return (
        <ImageBackground source={require('../../../assets/splash.png')} style={{ width: '100%', height: '100%' }}>
            <View style={styles.container}>
                <View style={styles.groupHeader}>
                    <Image source={require('../../../assets/logo.png')} style={styles.icon}/>
                    <Text style={styles.text}>
                        100K+ Premium Recipe
                    </Text>
                </View>
                <View style={styles.TitleBody}>
                <Text style={{fontSize: 50,maxWidth: 200, textAlign: 'center',color: colors.white,fontWeight: 600}}>Get  Cooking</Text>
                <Text style={{fontSize: 16,color: colors.white, fontWeight: 400}}>Simple way to find Tasty Recipe</Text>
            </View>
                <Button onPress={() => {navigation.navigate("Home",{})}}>Start Cooking</Button>
            </View>
            
        </ImageBackground>

    )
}


export default React.memo(ButtonComponent);