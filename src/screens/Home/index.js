import React from "react";
import { Pressable, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import Input from "../../components/TextInput";
import TitleComponent from '../../components/Title'
import Categories from "../../components/Categories";
import RecipeCardsComponent from "../../components/RecipeCards";
const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Input pressable onPress={() => navigation.navigate('Search')} />
            <TitleComponent text="Featured Recipes" style={styles.text} />
            <RecipeCardsComponent />

            <Categories categories={["All", "Trending"]} selectedCategory={"All"} onCategoryPress={() => { }} />
        </SafeAreaView>
    )
}

export default HomeScreen;
