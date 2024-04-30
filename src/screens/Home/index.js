import React from "react";
import { FlatList, Pressable, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import Input from "../../components/TextInput";
import TitleComponent from '../../components/Title'
import Categories from "../../components/Categories";
import RecipeCardsComponent from "../../components/RecipeCards";
import DishesCard from "../../components/DishesCard";
const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Input pressable onPress={() => navigation.navigate('Search')} />
            <TitleComponent text="Featured Recipes" style={styles.text} />
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={[1, 2, 3]}
                keyExtractor={item => String(item)}
                style={{ marginTop: 15, marginHorizontal: -24 }}
                renderItem={({ index }) => <RecipeCardsComponent
                    style={index === 0 ? { marginLeft: 24 } : {}}
                    title='Steak with tomato sauce and bulgur rice.'
                    author={{
                        byUser: 'Levi',
                        avatar: 'https://blog-levi-cyc2y6f8x-trantrungtinlv.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.a7844172.ico&w=128&q=75'
                    }}
                    image='https://s3-alpha-sig.figma.com/img/3c62/fd09/97260dc6201178bf87d345d522de7bdf?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KnCG0iaYPow9O3HZII8Yn4YhZP5QRy9FmtPDxPFs9MyedE2f1SgBXt88yVgMD54n0SspVfvokA7aQKAa7u~Sk-xt1zZBg5lBxUTnyTt5BnStg3UJW45wa5Xwx10U-CcBp545x00MagvBbxX113Zb14UkLZWIlV50RDMe~OQA6JQUMUtHozKAABdqX8wbrgfmRAsEPSr7xhZCwAemoKehmHpCZnUnxXLeud4T9n3mB-DysRUbjs73WIpvr-fp2xd2sF49qZUfuusBxm4VY36IGbuqSElP6Ek~pEc9YWpG3ibgmyhgpg5qlDtIB0mWiMtHgZ-C-PCdcYyTR6u7vp6okw__'
                    time='20 mins'
                />}
            />
            <Categories categories={["All", "Trending", "Seasonal", "Chocoholic", "Daily"]} selectedCategory={"All"} onCategoryPress={() => { }} />
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={[1, 2, 3]}
                keyExtractor={item => String(item)}
                style={{ marginTop: 15, marginHorizontal: -24 }}
                renderItem={({ index }) => <DishesCard
                    style={index === 0 ? { marginLeft: 24 } : {}}
                />}
            />

        </SafeAreaView>
    )
}

export default HomeScreen;
