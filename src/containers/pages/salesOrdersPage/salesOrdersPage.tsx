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
import { Separator, YStack, YGroup, XStack, Text, XGroup } from 'tamagui'

import { appPath } from '@/common/configs/paths.config'
import { BoxDetailItemProps } from '@/components/core/BoxDetailItem'
import { Card } from '@/components/core/Card'
import CardSeries from '@/components/core/CardSeries/CardSeries'
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

    useProtectedRoute()
    const itens: BoxDetailItemProps[] = [
        {
            link: appPath.Training.index,
            name: 'Training A',
        },
        {
            link: appPath.Training.TrainingB,

            name: 'Training B',
        },
        {
            link: appPath.Training.TrainingC,
            name: 'Training C',
        },
        {
            link: appPath.Training.TrainingD,
            name: 'Training D',
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
            <YStack f={1} p={16} bg="#0a0a0a">
                <XStack p={16}>
                    <Text fontSize={20} color="white">
                        Create a training or consult your training
                    </Text>
                </XStack>
                <YGroup gap={30}>
                    {itens.map((item, index) => (
                        <YGroup.Item key={index}>
                            <TouchableOpacity onPress={() => router.push(item.link as never)}>
                                <CardSeries name={item.name} />
                            </TouchableOpacity>
                        </YGroup.Item>
                    ))}
                </YGroup>
            </YStack>
        </ScreenTemplate>
    )
}
