import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles.js";
const ButtonComponent = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}


export default React.memo(ButtonComponent);