import Ionicons from '@expo/vector-icons/Ionicons'
import { collection, addDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { TouchableOpacity, TextInput, Button, Alert } from 'react-native'
import { XStack, YStack, Text } from 'tamagui'

import ChatHeader from '@/components/layout/ChatHeader/ChatHeader'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'

import { database } from '../../../firebaseConfig'

export default function NewSerie() {
    const [description, setDescription] = useState('')
    const [name, setName] = useState('')
    const [formVisible, setFormVisible] = useState(true) // Start with form visible

    const addSerie = async () => {
        if (!description.trim()) {
            Alert.alert('Error', 'Description cannot be empty')
            return
        }

        try {
            await addDoc(collection(database, 'Series'), {
                name,
                description,
                createdAt: new Date(),
                // Add other fields as necessary
            })
            setDescription('') // Clear the input field
            setFormVisible(false) // Hide the form
        } catch (error) {
            console.error('Error adding chat:', error)
        }
    }

    return (
        <ScreenTemplate
            options={{
                title: 'New Chat',
                header: () => <ChatHeader title={'New Serie'} />,
            }}>
            <XStack f={1} p={16} alignItems="center" justifyContent="center">
                {formVisible ? (
                    <YStack w="100%" maxWidth={400} p={16} bg="#fff" borderRadius={8}>
                        <TextInput
                            value={name}
                            onChangeText={setName}
                            placeholder="Enter name  Ex:Serie A"
                            style={{ padding: 10, backgroundColor: '#f1f1f1', borderRadius: 8, marginBottom: 10 }}
                        />
                        <TextInput
                            value={description}
                            onChangeText={setDescription}
                            placeholder="Enter description of serie"
                            style={{ padding: 10, backgroundColor: '#f1f1f1', borderRadius: 8, marginBottom: 10 }}
                        />
                        <Button title="Add Training" onPress={addSerie} />
                        <TouchableOpacity onPress={() => setFormVisible(false)}>
                            <Ionicons name="close-circle" size={60} color="#3b0764" />
                        </TouchableOpacity>
                    </YStack>
                ) : (
                    <Text>Training added successfully!</Text>
                )}
            </XStack>
        </ScreenTemplate>
    )
}
