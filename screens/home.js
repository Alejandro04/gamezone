import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Modal } from 'react-native'
import { globalStyles } from '../styles/global'
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'FIFA 2020', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'CALL DUTTY', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'F1', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        setModalOpen(false);
    };


    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <View style={globalStyles.modalContent}>
                    <MaterialIcons
                        name='close'
                        size={24}
                        style={{ ...globalStyles.modalToggle, ...globalStyles.modalClose }}
                        onPress={() => setModalOpen(false)}
                    />
                    <ReviewForm addReview={addReview} />
                </View>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={globalStyles.modalToggle}
                onPress={() => setModalOpen(true)}
            />
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <View style={globalStyles.card}>
                            <View style={globalStyles.cardContent}>
                                <Text style={globalStyles.titleText}> {item.title} </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}