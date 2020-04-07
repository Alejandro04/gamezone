import React from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import { images } from '../styles/global';

export default function ReviewDetails({ navigation }) {
    const rating = navigation.getParam('rating');

    return (
        <View styles={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text> {navigation.getParam('title')} </Text>
                    <Text> {navigation.getParam('body')} </Text>
                    <View style={styles.rating}>
                        <Text>GameZone rating: </Text>
                        <Image source={images.ratings[rating]} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
    }
})