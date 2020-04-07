import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function About() {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Text>About</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowColor: 2,
        marginHorizontal: 4,
        marginVertical: 6
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
    }
})