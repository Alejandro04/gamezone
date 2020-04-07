import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import globalStyles from '../styles/global'

export default function Home({ navigation }) {

    const [reviews, setReviews] = useState([
        { title: 'FIFA 2020', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'F1 2020', rating: 5, body: 'lorem ipsum', key: '2' },
        { title: 'Call Of Duty', rating: 5, body: 'lorem ipsum', key: '3' },
        { title: 'Counter Strike', rating: 5, body: 'lorem ipsum', key: '4' },
    ])

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Home Screen</Text>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={styles.titleText}> {item.title} </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18
    }
})