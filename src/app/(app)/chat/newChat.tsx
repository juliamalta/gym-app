import Ionicons from '@expo/vector-icons/Ionicons'
import { collection, addDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { TouchableOpacity, TextInput, Button, Alert, StyleSheet } from 'react-native'
import { XStack, YStack, Text } from 'tamagui'

import ChatHeader from '@/components/layout/ChatHeader/ChatHeader'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'

import { database } from '../../../firebaseConfig'

export default function NewChat() {
    const [description, setDescription] = useState('')
    const [formVisible, setFormVisible] = useState(true) // Start with form visible

    const addChat = async () => {
        if (!description.trim()) {
            Alert.alert('Error', 'Description cannot be empty')
            return
        }

        try {
            await addDoc(collection(database, 'Chats'), {
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
                header: () => <ChatHeader title={'New Chat'} />,
            }}>
            <XStack f={1} p={16} alignItems="center" justifyContent="center" bg="#0a0a0a">
                {formVisible ? (
                    <YStack w="100%" maxWidth={400} p={16} bg="#171717" borderRadius={8}>
                        <TextInput
                            value={description}
                            onChangeText={setDescription}
                            placeholder="Enter chat description"
                            style={{ padding: 10, backgroundColor: '#f1f1f1', borderRadius: 8, marginBottom: 10 }}
                        />
                        <TouchableOpacity style={styles.button} onPress={addChat}>
                            <Text fontSize={16} color="#ffff">
                                Add Chat
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setFormVisible(false)}>
                            <Ionicons name="close-circle" size={60} color="#3b0764" />
                        </TouchableOpacity>
                    </YStack>
                ) : (
                    <Text fontSize={28}>Chat added successfully!</Text>
                )}
            </XStack>
        </ScreenTemplate>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3b0764', // Purple color
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
})
