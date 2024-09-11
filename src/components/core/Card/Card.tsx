import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { collection, onSnapshot, deleteDoc, query, where, QuerySnapshot, updateDoc, addDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { Text, XStack, YStack, XGroup } from 'tamagui'

import { CardProps } from '@/components/core/Card/Card.types'

import { database } from '../../../firebaseConfig'

export default function Card() {
    const [trainer, setTrainer] = useState('')

    useEffect(() => {
        // Reference to the 'Chats' collection
        const chatCollectionRef = collection(database, 'TrainerBiceps')

        // Set up the real-time listener
        const unsubscribe = onSnapshot(chatCollectionRef, (querySnapshot) => {
            const list = []
            querySnapshot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            console.log('Fetched chat data: ', list)
            setTrainer(list)
        })

        // Clean up the listener on component unmount
        return () => unsubscribe()
    }, [])

    return (
        <XGroup>
            <XStack width="100%">
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={trainer}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <XStack
                            ml="auto"
                            p={16}
                            mt={10}
                            jc="space-between"
                            f={1}
                            bg="#171717"
                            style={{ width: '100%' }}
                            borderRadius={8}>
                            <XStack gap={10}>
                                <YStack ac="center">
                                    <Text textAlign="left" color="white">
                                        {item.name}
                                    </Text>
                                </YStack>
                            </XStack>
                        </XStack>
                    )}
                />
            </XStack>
        </XGroup>
    )
}
