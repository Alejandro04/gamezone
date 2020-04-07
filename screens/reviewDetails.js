import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default function ReviewDetails({ navigation }){

    const pressHandler = () => {
        navigation.navigate('Home')
    }

    return (
        <View styles={styles.container}>
            <Text>ReviewDetails Screen</Text>
            <Button title='go to home screen'
            onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})