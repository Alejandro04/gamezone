import React from 'react'
import { View, Text, Image } from 'react-native'
import { images } from '../styles/global';
import { globalStyles } from '../styles/global'

export default function ReviewDetails({ navigation }) {
    const rating = navigation.getParam('rating');

    return (
        <View styles={globalStyles.container}>
            <View style={globalStyles.card}>
                <View style={globalStyles.cardContent}>
                    <Text> {navigation.getParam('title')} </Text>
                    <Text> {navigation.getParam('body')} </Text>
                    <View style={globalStyles.rating}>
                        <Text>GameZone rating: </Text>
                        <Image source={images.ratings[rating]} />
                    </View>
                </View>
            </View>
        </View>
    )
}
