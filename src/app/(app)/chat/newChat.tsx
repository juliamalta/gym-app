import Ionicons from '@expo/vector-icons/Ionicons'
import { collection, addDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { TouchableOpacity, TextInput, Button, Alert, StyleSheet } from 'react-native'
import { XStack, YStack, Text } from 'tamagui'
import { Avatar } from 'tamagui'

import ChatHeader from '@/components/layout/ChatHeader/ChatHeader'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'

import { auth } from '../../../firebaseConfig'
import { database } from '../../../firebaseConfig'

export default function NewChat() {
    const [description, setDescription] = useState('')
    const [comment, setcomment] = useState('')
    const [like, setlike] = useState(0)
    const [formVisible, setFormVisible] = useState(true)

    const user = auth.currentUser
    const userId = user ? user.email : null

    const addChat = async () => {
        if (!description.trim()) {
            Alert.alert('Error', 'Description cannot be empty')
            return
        }

        try {
            await addDoc(collection(database, 'Chats'), {
                description,
                userId,
                comment,
                like,
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
                    <YStack w="100%" minHeight={400} h={400} p={16} bg="#171717" borderRadius={8}>
                        <XStack justifyContent="space-between" ai="center">
                            <TouchableOpacity onPress={() => setFormVisible(false)}>
                                <Text color="#60a5fa">Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={addChat}>
                                <Text fontSize={12} color="#60a5fa">
                                    Post
                                </Text>
                            </TouchableOpacity>
                        </XStack>
                        <XStack>
                            <Avatar size={60} circular>
                                <Avatar.Image
                                    accessibilityLabel="Cam"
                                    src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                                />
                                <Avatar.Fallback backgroundColor="$gray5" />
                            </Avatar>
                            <TextInput
                                value={description}
                                onChangeText={setDescription}
                                placeholderTextColor="#52525b"
                                placeholder="What´s up?"
                                style={{
                                    padding: 10,
                                    backgroundColor: 'transparent',
                                    borderRadius: 8,
                                    marginBottom: 10,
                                    color: '#fafaf9',
                                }}
                            />
                        </XStack>
                    </YStack>
                ) : (
                    <XStack f={1} p={16} alignItems="center" justifyContent="center" bg="#0a0a0a">
                        <Text fontSize={20} color="white">
                            Post added successfully!
                        </Text>
                    </XStack>
                )}
            </XStack>
        </ScreenTemplate>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#262626', // Purple color
        padding: 15,

        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 5,
    },
})
