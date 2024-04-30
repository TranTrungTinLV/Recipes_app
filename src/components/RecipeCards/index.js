import React from "react";
import styles from './styles.js'
import { Image, Text, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import TitleComponent from '../Title/index.js';

const RecipeCardsComponent = ({ title, image, author, rating, time }) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={{ flex: 1, gap: 5 }}>
                <TitleComponent text={title} style={styles.text} numberOfLines={1} />
                <View style={styles.stars}>
                    <AntDesign name="star" size={12} color="black" />
                    <AntDesign name="star" size={12} color="black" />
                    <AntDesign name="star" size={12} color="black" />
                    <AntDesign name="star" size={12} color="black" />
                </View>
            </View>
            <Image style={{ width: 80, height: 80, borderRadius: 40, marginTop: -40, marginRight: 9 }} source={{ uri: image }} />
        </View>
        <View style={styles.footer}>
            <View style={styles.byUser}>
                <Image style={styles.avatar} source={{ uri: author?.avatar }} />
                <TitleComponent text={author?.byUser} style={styles.text_avatar} />
            </View>
            <View style={styles.setTime}>
                <Entypo name="time-slot" size={17} color="black" />
                <TitleComponent text={time} style={styles.text_avatar} />
            </View>
        </View>
    </View>

);

export default RecipeCardsComponent;