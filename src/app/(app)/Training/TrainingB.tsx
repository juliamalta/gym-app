import { FontAwesome } from '@expo/vector-icons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
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
import { Text, XStack, YStack, XGroup, View, Alert, Button } from 'tamagui'
import { Avatar } from 'tamagui'

import { Card } from '@/components/core/Card'
import { HeaderSignOut } from '@/components/layout/HeaderSignOut'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'

import logo from '../../../../assets/halter.png'
import { auth, database } from '../../../firebaseConfig'
export default function TrainingA() {
    const [modalVisible, setModalVisible] = useState(false)
    const [trainingA, setTrainingA] = useState('')
    const [exercise, setExercise] = useState('')
    const [qntRepeticao, setqntRepeticao] = useState('')
    const [qntSerie, setqntSerie] = useState('')
    const user = auth.currentUser
    const userId = user ? user.email : null
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [customInterval, setCustomInterval] = useState<number | undefined>(undefined)

    const starTime = () => {
        setCustomInterval(
            setInterval(() => {
                changeTime()
            }, 1000)
        )
    }

    const stopTime = () => {
        if (customInterval) {
            clearInterval(customInterval)
        }
    }
    const clearTime = () => {
        stopTime()
        setSeconds(0)
        setMinutes(0)
    }
    const changeTime = () => {
        setSeconds((prevState) => {
            if (prevState + 1 == 60) {
                setMinutes(minutes + 1)

                return 0
            }
            return prevState + 1
        })
    }

    useEffect(() => {
        // Reference to the 'Chats' collection
        const chatCollectionRef = collection(database, 'TrainingB')

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
            await addDoc(collection(database, 'TrainingB'), {
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
            await deleteDoc(doc(database, 'TrainingB', TrainingId))
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
                <XStack p={8}>
                    <YStack m="auto">
                        <Text fontSize={20} color="white" textAlign="center" ac="center">
                            Training B
                        </Text>
                    </YStack>
                </XStack>
                <XStack>
                    <Text fontSize={16} color="white" textAlign="center" ac="center" m="auto">
                        Add your Exercises
                    </Text>
                </XStack>

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={trainingA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        userId === item.userId && ( // Verifica se o item pertence ao usuário logado
                            <XStack bg="#262626" p={16} borderRadius={10} mt={16} f={1} jc="space-between">
                                <TouchableOpacity>
                                    <YStack>
                                        <XStack gap={2} ai="center">
                                            <Avatar circular size="$6">
                                                <Avatar.Image accessibilityLabel="Cam" src={logo} />
                                                <Avatar.Fallback backgroundColor="$blue10" />
                                            </Avatar>
                                            <Text color="white" fontSize={16} textAlign="center">
                                                {item.exercise}
                                            </Text>
                                        </XStack>
                                        <XStack jc="space-between">
                                            <YStack gap={10}>
                                                <Text color="white">Série</Text>
                                                <Text color="white">{item.qntSerie} </Text>
                                            </YStack>
                                            <YStack gap={10}>
                                                <Text color="white">Repetition</Text>
                                                <Text color="white">{item.qntRepeticao}</Text>
                                            </YStack>
                                        </XStack>
                                    </YStack>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                                    <FontAwesome name="trash" size={23} color="#f92e64"></FontAwesome>
                                </TouchableOpacity>
                            </XStack>
                        )
                    }
                />

                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <XStack ml="auto">
                        <MaterialIcons name="add-circle" size={48} color="#4f46e5" />
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
