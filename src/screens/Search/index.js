import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./style";
import Input from "../../components/TextInput";
const SearchScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Input />
        </SafeAreaView>
    )
}

export default SearchScreen;
