import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Modal } from 'react-native'
import globalStyles from '../styles/global'
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'FIFA 2020', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'F1 2020', rating: 3, body: 'lorem ipsum', key: '2' },
        { title: 'Call Of Duty', rating: 2, body: 'lorem ipsum', key: '3' },
        { title: 'Counter Strike', rating: 1, body: 'lorem ipsum', key: '4' },
    ])

    return (
        <View style={styles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name='close'
                        size={24}
                        style={{ ...styles.modalToggle, ...styles.modalClose }}
                        onPress={() => setModalOpen(false)}
                    />
                    <Text>Hola</Text>
                </View>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <View style={styles.card}>
                            <View style={styles.cardContent}>
                                <Text style={styles.titleText}> {item.title} </Text>
                            </View>
                        </View>
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
    },
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
    },
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
})