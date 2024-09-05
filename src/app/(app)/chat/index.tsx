import { FontAwesome } from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Link } from 'expo-router'
import { router } from 'expo-router'
import { collection, onSnapshot, deleteDoc } from 'firebase/firestore'
import { doc } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'
import { XStack, View, Text, YGroup, YStack } from 'tamagui'
import { Avatar } from 'tamagui'

import { appPath } from '@/common/configs/paths.config'
import { BoxDetailItemProps } from '@/components/core/BoxDetailItem'
import ChatHeader from '@/components/layout/ChatHeader/ChatHeader'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'

import { database } from '../../../firebaseConfig'

export default function Chat() {
    useProtectedRoute()
    const menuBox: BoxDetailItemProps[] = [
        {
            link: appPath.chat.newchat,
            icon: <Ionicons name="add-circle" size={60} color="#3b0764" />,
            title: 'Notifications',
        },
    ]

    const [chat, setChat] = useState([])
    useEffect(() => {
        // Reference to the 'Chats' collection
        const chatCollectionRef = collection(database, 'Chats')

        // Set up the real-time listener
        const unsubscribe = onSnapshot(chatCollectionRef, (querySnapshot) => {
            const list = []
            querySnapshot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            console.log('Fetched chat data: ', list)
            setChat(list)
        })

        // Clean up the listener on component unmount
        return () => unsubscribe()
    }, [])

    const deleteChat = async (chatId) => {
        try {
            await deleteDoc(doc(database, 'Chats', chatId))
            console.log('Chat deleted successfully')
        } catch (error) {
            console.error('Error deleting chat:', error)
        }
    }

    return (
        <ScreenTemplate
            options={{
                title: 'Chat',
                header: () => <ChatHeader title={'Social'} />,
            }}>
            <YStack f={1} mr="auto" p={16}>
                <XStack p={16}>
                    <Text fontSize={20}>Chat</Text>
                </XStack>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={chat}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <XStack
                            ml="auto"
                            p={16}
                            mt={10}
                            jc="space-between"
                            f={1}
                            bg="#d1d5db"
                            style={{ width: '100%' }}
                            borderRadius={8}>
                            <XStack gap={10}>
                                <Avatar size={60} circular space="$2">
                                    <Avatar.Image
                                        accessibilityLabel="Cam"
                                        src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                                    />
                                    <Avatar.Fallback backgroundColor="$gray5" />
                                </Avatar>
                                <YStack pt={10}>
                                    <Text textAlign="center">{item.description}</Text>
                                    <Text textAlign="left">name.User</Text>
                                </YStack>
                            </XStack>

                            <XStack ai="center">
                                <TouchableOpacity onPress={() => deleteChat(item.id)}>
                                    <FontAwesome name="trash" size={23} color="#f92e64"></FontAwesome>
                                </TouchableOpacity>
                            </XStack>
                        </XStack>
                    )}
                />
                <YGroup gap={20} pt={16} mb={20} ac="flex-end" mt="auto">
                    {menuBox.map((item, index) => (
                        <YGroup.Item key={index}>
                            <TouchableOpacity onPress={() => router.push(item.link as never)}>
                                {item.icon}
                            </TouchableOpacity>
                        </YGroup.Item>
                    ))}
                </YGroup>
            </YStack>
        </ScreenTemplate>
    )
}
