import { FontAwesome } from '@expo/vector-icons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Link } from 'expo-router'
import { router } from 'expo-router'
import { collection, onSnapshot, deleteDoc } from 'firebase/firestore'
import { doc } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'
import { XStack, View, Text, YGroup, YStack, XGroup } from 'tamagui'
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
            icon: <Ionicons name="add-circle" size={30} color="#3b0764" />,
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
            <YStack f={1} mr="auto" bg="#0a0a0a">
                <XGroup gap={20} pt={16} mb={20} ai="center" jc="center">
                    <Avatar size={60} circular space="$2">
                        <Avatar.Image
                            accessibilityLabel="Cam"
                            src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                        />
                        <Avatar.Fallback backgroundColor="$gray5" />
                    </Avatar>
                    <YStack>
                        <Text color="white">User.name</Text>
                        <Text color="white">What´s up?</Text>
                    </YStack>

                    {menuBox.map((item, index) => (
                        <YGroup.Item key={index}>
                            <TouchableOpacity onPress={() => router.push(item.link as never)}>
                                {item.icon}
                            </TouchableOpacity>
                        </YGroup.Item>
                    ))}
                </XGroup>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={chat}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <XStack ml="auto" p={16} mt={3} jc="space-between" f={1} bg="#171717" style={{ width: '100%' }}>
                            <XStack gap={10}>
                                <Avatar size={60} circular space="$2">
                                    <Avatar.Image
                                        accessibilityLabel="Cam"
                                        src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                                    />
                                    <Avatar.Fallback backgroundColor="$gray5" />
                                </Avatar>
                                <YStack pt={10}>
                                    <Text textAlign="left" color="white">
                                        {item.userId}
                                    </Text>
                                    <Text textAlign="left" color="white">
                                        {item.description}
                                    </Text>
                                    <XStack f={1} pt={20} gap={90}>
                                        <XStack>
                                            <FontAwesome5 name="comment-alt" size={24} color="white" />
                                        </XStack>
                                        <XStack>
                                            <FontAwesome name="heart-o" size={24} color="white" />
                                        </XStack>
                                    </XStack>
                                </YStack>
                            </XStack>

                            <XStack>
                                <TouchableOpacity onPress={() => deleteChat(item.id)}>
                                    <FontAwesome name="trash" size={23} color="#f92e64"></FontAwesome>
                                </TouchableOpacity>
                            </XStack>
                        </XStack>
                    )}
                />
            </YStack>
        </ScreenTemplate>
    )
}
