import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { router } from 'expo-router'
import { doc } from 'firebase/firestore'
import { collection, onSnapshot, deleteDoc } from 'firebase/firestore'
import React from 'react'
import { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'
import { Separator, YStack, YGroup, XStack, Text } from 'tamagui'

import { appPath } from '@/common/configs/paths.config'
import { BoxDetailItemProps } from '@/components/core/BoxDetailItem'
import { Card } from '@/components/core/Card'
import { ListItem } from '@/components/core/ListItem'
import { ListSales } from '@/components/core/ListItem/ListItemOptions'
import { SearchItem } from '@/components/core/SearchItem'
import ChatHeader from '@/components/layout/ChatHeader/ChatHeader'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'

import { database } from '../../../firebaseConfig'

export default function SalesOrdersPage() {
    useProtectedRoute()
    const menuBox: BoxDetailItemProps[] = [
        {
            link: appPath.salesOrders.serie,
            icon: <Ionicons name="add-circle" size={60} color="#3b0764" />,
            title: 'Notifications',
        },
    ]
    const [serie, setSerie] = useState([])
    useEffect(() => {
        const seriesCollectionRef = collection(database, 'Series')

        // Set up the real-time listener
        const unsubscribe = onSnapshot(seriesCollectionRef, (querySnapshot) => {
            const list = []
            querySnapshot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            console.log('Fetched chat data: ', list)
            setSerie(list)
        })

        // Clean up the listener on component unmount
        return () => unsubscribe()
    }, [])
    const deleteChat = async (serieId) => {
        try {
            await deleteDoc(doc(database, 'Series', serieId))
            console.log('Chat deleted successfully')
        } catch (error) {
            console.error('Error deleting chat:', error)
        }
    }

    return (
        <ScreenTemplate
            options={{
                title: 'Chat',
                header: () => <ChatHeader title={'My Training'} />,
            }}>
            <YStack f={1} mr="auto" p={16}>
                <XStack p={16}>
                    <Text fontSize={20}>Create a training or consult your training</Text>
                </XStack>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={serie}
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
                                <XStack>
                                    <MaterialCommunityIcons name="weight-lifter" size={48} />
                                </XStack>
                                <YStack ac="center">
                                    <Text textAlign="left">{item.name}</Text>
                                    <Text textAlign="left">{item.description}</Text>
                                </YStack>
                            </XStack>

                            <XStack ai="center">
                                <MaterialIcons name="more-vert" size={24} color="#3b0764" />
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
