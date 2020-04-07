import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about'
import Header from '../shared/header'
import React from 'react'

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About GameZone' />,
                // headerStyle: { backgroundColor: '#eee'}
            }
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444', //title
        headerStyle: { backgroundColor: '#eee', height: 60}
    }
})

export default AboutStack
