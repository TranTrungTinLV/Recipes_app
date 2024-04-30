import React from "react";
import styles from './styles.js'
import { Image, Text, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import TitleComponent from '../Title/index.js';
import { FontAwesome } from '@expo/vector-icons';

//logic star
export const Rating = ({ rating }) => {
    const arr = [1, 2, 3, 4, 5];
    // let rating = 0;
    return arr?.map((star) => {
        if (Math.round(rating) >= (star)) {
            return (
                <FontAwesome name="star" size={12} color="rgba(255, 173, 48, 1)" />
            )
        } else {
            return (<FontAwesome name="star-half-empty" size={12} color="rgba(255, 173, 48, 1)" />)

        }
    })
}

const RecipeCardsComponent = ({ title, image, author, rating, time,style }) => (
    <View style={[styles.container,style]}>
        <View style={styles.header}>
            <View style={{ flex: 1, gap: 5 }}>
                <TitleComponent text={title} style={styles.text} numberOfLines={1} />
                <View style={styles.stars}>
                    <Rating rating={4.3} />
                </View>
            </View>
            <Image style={{ width: 80, height: 80, borderRadius: 40, marginTop: -30, marginRight: 9 }} source={{ uri: image }} />
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