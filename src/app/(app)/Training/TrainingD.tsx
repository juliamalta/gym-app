import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { getItem } from 'expo-secure-store'
import {
    collection,
    onSnapshot,
    deleteDoc,
    query,
    where,
    QuerySnapshot,
    updateDoc,
    addDoc,
    doc,
} from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Modal } from 'react-native'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { Text, XStack, YStack, XGroup, View, Alert } from 'tamagui'

import { Card } from '@/components/core/Card'
import { HeaderSignOut } from '@/components/layout/HeaderSignOut'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'

import { auth, database } from '../../../firebaseConfig'

export default function TrainingD() {
    const [modalVisible, setModalVisible] = useState(false)
    const [trainingA, setTrainingA] = useState('')
    const [exercise, setExercise] = useState('')
    const [qntRepeticao, setqntRepeticao] = useState('')
    const [qntSerie, setqntSerie] = useState('')
    const user = auth.currentUser
    const userId = user ? user.email : null

    useEffect(() => {
        // Reference to the 'Chats' collection
        const chatCollectionRef = collection(database, 'TrainingD')

        // Set up the real-time listener
        const unsubscribe = onSnapshot(chatCollectionRef, (querySnapshot) => {
            const list = []
            querySnapshot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            console.log('Fetched chat data: ', list)
            setTrainingA(list)
        })

        // Clean up the listener on component unmount
        return () => unsubscribe()
    }, [])

    const addChat = async () => {
        if (!exercise.trim()) {
            Alert.alert('Error', 'Description cannot be empty')
            return
        }

        try {
            await addDoc(collection(database, 'TrainingD'), {
                exercise,
                qntRepeticao,
                qntSerie,
                userId,
                // Add other fields as necessary
            })
            setExercise('')
            setqntRepeticao('')
            setqntSerie('') // Clear the input field
        } catch (error) {
            console.error('Error adding chat:', error)
        }
    }

    const handleDelete = async (TrainingId) => {
        try {
            await deleteDoc(doc(database, 'TrainingD', TrainingId))
            console.log('Chat deleted successfully')
        } catch (error) {
            console.error('Error deleting chat:', error)
        }
    }
    return (
        <ScreenTemplate
            options={{
                title: 'Chat',
                header: () => <HeaderSignOut title={'My Training'} />,
            }}>
            <YStack f={1} p={16} bg="#0a0a0a" width="100%">
                <XStack p={16}>
                    <Text fontSize={20} color="white" textAlign="center" ac="center">
                        Training D
                    </Text>
                </XStack>
                <XStack>
                    <Text fontSize={18} color="white" textAlign="center" ac="center">
                        Add your Exercicios
                    </Text>
                </XStack>

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={trainingA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        userId === item.userId && ( // Verifica se o item pertence ao usuário logado
                            <XStack bg="#404040" p={16} borderRadius={10} mt={16} f={1} jc="space-between">
                                <YStack>
                                    <YStack>
                                        <Text color="white">{item.exercise}</Text>
                                    </YStack>
                                    <XStack gap={12}>
                                        <Text color="white">{item.qntSerie} series</Text>
                                        <Text color="white">{item.qntRepeticao} repetition</Text>
                                    </XStack>
                                </YStack>

                                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                                    <MaterialCommunityIcons name="delete" size={24} color="red" />
                                </TouchableOpacity>
                            </XStack>
                        )
                    }
                />

                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <XStack ml="auto">
                        <MaterialIcons name="add-circle" size={48} color="white" />
                    </XStack>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.')
                        setModalVisible(!modalVisible)
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <XStack jc="space-between" ai="center">
                                <XStack>
                                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textStyle}>Fechar</Text>
                                    </TouchableOpacity>
                                </XStack>
                                <XStack>
                                    <TouchableOpacity style={styles.button} onPress={addChat}>
                                        <Text fontSize={16} color="#ffff">
                                            Add Exercise
                                        </Text>
                                    </TouchableOpacity>
                                </XStack>
                            </XStack>
                            <YStack>
                                <YStack>
                                    <Text color="white">Name of Exercise</Text>
                                </YStack>
                                <TextInput
                                    value={exercise}
                                    onChangeText={setExercise}
                                    placeholder="Enter your name of exercise"
                                    placeholderTextColor="#a3a3a3"
                                    style={{
                                        padding: 10,
                                        backgroundColor: 'transparent',
                                        borderRadius: 8,
                                        marginBottom: 20,
                                        width: 300,
                                        color: '#fafaf9',
                                    }}
                                />
                            </YStack>
                            <YStack>
                                <YStack>
                                    <Text color="white">Number of Series</Text>
                                </YStack>
                                <TextInput
                                    value={qntSerie}
                                    onChangeText={setqntSerie}
                                    placeholder="Enter number of series"
                                    placeholderTextColor="#a3a3a3"
                                    style={{
                                        padding: 10,
                                        backgroundColor: 'transparent',
                                        borderRadius: 8,
                                        marginBottom: 20,
                                        width: 300,
                                        color: '#fafaf9',
                                    }}
                                />
                            </YStack>
                            <YStack>
                                <YStack>
                                    <Text color="white">Number of Repetition</Text>
                                </YStack>
                                <TextInput
                                    value={qntRepeticao}
                                    onChangeText={setqntRepeticao}
                                    placeholder="Enter of repetition"
                                    placeholderTextColor="#a3a3a3"
                                    style={{
                                        padding: 10,
                                        backgroundColor: 'transparent',
                                        borderRadius: 8,
                                        marginBottom: 20,
                                        width: 300,
                                        color: '#fafaf9',
                                    }}
                                />
                            </YStack>
                        </View>
                    </View>
                </Modal>
            </YStack>
        </ScreenTemplate>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: '#262626',
        borderRadius: 20,
        padding: 50,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },

    textStyle: {
        color: '#60a5fa',
        fontWeight: 'bold',
        justifyContent: 'space-between',
    },
    textInput: {
        backgroundColor: 'transparent',
        color: 'white',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: 'white',
    },
})
