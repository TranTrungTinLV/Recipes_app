import React from "react";
import styles from './styles.js'
import { Text } from "react-native";
const TitleComponent = ({ text, style }) => (
    <Text style={[styles.title, style]}>{text}</Text>
);

export default TitleComponent;