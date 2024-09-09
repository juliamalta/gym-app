import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { collection, onSnapshot, deleteDoc, query, where, QuerySnapshot, updateDoc, addDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { Text, XStack, YStack, XGroup } from 'tamagui'

import { Card } from '@/components/core/Card'
import { HeaderSignOut } from '@/components/layout/HeaderSignOut'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'

import { auth, database } from '../../../firebaseConfig'

export default function TrainerBiceps() {
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
        <ScreenTemplate
            options={{
                title: 'Chat',
                header: () => <HeaderSignOut title={'My Training'} />,
            }}>
            <YStack f={1} p={16} bg="#0a0a0a" width="100%">
                <XStack p={16}>
                    <Text fontSize={20} color="white" textAlign="center" ac="center">
                        Training Biceps
                    </Text>
                </XStack>
                <XStack>
                    <Card />
                </XStack>
            </YStack>
        </ScreenTemplate>
    )
}
