import React from "react";
import styles from './styles.js'
import { Image, Text, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const RecipeCardsComponent = ({ title, image, author, rating, time }) => (
    // <View>
    //     <Text numberOfLines={1} style={styles.title} />
    //     <View styles={styles.row}>
    //         <Image source={{ uri: author?.image }} />
    //         <Text>By {author?.name} Levi</Text>
    //     </View>
    // </View>
    <View>
        <View style={{ marginTop: 30, marginBottom: 30 }}>

            <View style={{ paddingVertical: 32, paddingHorizontal: 32, borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.32, shadowRadius: 0.46, elevation: 2, backgroundColor: 'white' }}>
                <Text numberOfLines={1} style={styles.title}>Steak with tomato sauce and bulgur rice.</Text>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name="star" size={12} color="black" />
                    <AntDesign name="star" size={12} color="black" />
                    <AntDesign name="star" size={12} color="black" />
                    <AntDesign name="star" size={12} color="black" />
                    <AntDesign name="star" size={12} color="black" />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 10 }}>
                    <Image source={{ uri: 'https://s3-alpha-sig.figma.com/img/581a/7d11/67c1cc036aaf74ebd257b46d115c1af3?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=he-qnNUDPf66KwFJLApYD30ChKf20XNz1PSio7TtU7uMsuxivAZYbCQgsua4UKoYY~xYEG~4LK4xmFZF5WjoDsqCfqyfIHhmMCwkbaXqyy7L6U~gKasJbMNF3dgxm~3sXNrzJmfc0xL1ssZocc31EvRYSiqCohg03Nk9B4EdKWoAjXH4XR7zulASdJKoJer1Mds9tEGAU38luZXzKQlVSLKDU0ts4mxucn0SFEBzcosKn9-bEraBXkAeeDt5tUx0K5aDnryEf8KXLajjb8cKMa1kl3Iok5PTXmFD~KvJtKr77kpXpZIFj41nHaX8xm51JGxAA4js7l~6CQ2pjGLevA__' }} style={{ width: 25, height: 25, borderRadius: 13 }} />
                    <Text numberOfLines={1} style={styles.text}>BY LEVI</Text>
                </View>
            </View>



        </View>
        <View style={{ position: 'absolute', alignSelf: 'flex-end', alignItems: 'center', gap: 6 }}>
            <Image
                style={{ width: 100, height: 100, borderRadius: 50, marginRight: 15 }}
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/3c62/fd09/97260dc6201178bf87d345d522de7bdf?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KnCG0iaYPow9O3HZII8Yn4YhZP5QRy9FmtPDxPFs9MyedE2f1SgBXt88yVgMD54n0SspVfvokA7aQKAa7u~Sk-xt1zZBg5lBxUTnyTt5BnStg3UJW45wa5Xwx10U-CcBp545x00MagvBbxX113Zb14UkLZWIlV50RDMe~OQA6JQUMUtHozKAABdqX8wbrgfmRAsEPSr7xhZCwAemoKehmHpCZnUnxXLeud4T9n3mB-DysRUbjs73WIpvr-fp2xd2sF49qZUfuusBxm4VY36IGbuqSElP6Ek~pEc9YWpG3ibgmyhgpg5qlDtIB0mWiMtHgZ-C-PCdcYyTR6u7vp6okw__' }} />

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <Entypo name="back-in-time" size={24} color="black" />
                <Text style={styles.text}>
                    20 mins
                </Text>
            </View>
        </View>
    </View>

);

export default RecipeCardsComponent;