import React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../styles/global'

export default function About() {
    return (
        <View style={globalStyles.card}>
            <View style={globalStyles.cardContent}>
                <Text>About</Text>
            </View>
        </View>
    )
}