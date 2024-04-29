import React from "react";
import { Pressable, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { EvilIcons } from '@expo/vector-icons';
const Input = ({ showSearchIcon, placeholder, pressable, onPress }) => {
    const renderInput = () => {
        return (
            <View style={styles.container}>
                {showSearchIcon ?
                    <EvilIcons name="search" size={16} color="black" style={styles.icon} />
                    : null}
                <TextInput editable={!pressable} style={styles.input} placeholder={placeholder} />

            </View>
        )
    }
    if (pressable) {
        return (
            <Pressable onPress={onPress}>
                {renderInput}
            </Pressable>
        )
    }

    return renderInput()


}

Input.defaultProps = {
    placeholder: 'Search recipe',
    showSearchIcon: true
}

export default Input;
