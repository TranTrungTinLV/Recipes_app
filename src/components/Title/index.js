import React from "react";
import styles from './styles.js'
import { Text } from "react-native";
const TitleComponent = ({ text, style, numberOfLines }) => (
    <Text style={[styles.title, style]} numberOfLines={numberOfLines}>{text}</Text>
);

export default TitleComponent;