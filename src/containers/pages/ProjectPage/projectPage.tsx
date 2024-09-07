import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Separator, YStack, YGroup } from 'tamagui'

import { appPath } from '@/common/configs/paths.config'
import { BoxDetailItemProps } from '@/components/core/BoxDetailItem'
import { CardsOption } from '@/components/core/CardsOption'
import CardTrainer from '@/components/core/CardTrainer/CardTrainer'
import { ListItem } from '@/components/core/ListItem'
import { ListProject } from '@/components/core/ListItem/ListItemOptions'
import { SearchItem } from '@/components/core/SearchItem'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'
export default function ProjectPage() {
    useProtectedRoute()
    const menuBox: BoxDetailItemProps[] = [
        {
            link: appPath.notifications,
            icon: <Feather color="white" name="bell" size={24} />,
            name: 'Leg',
            desc: 'Training of leg',
        },
        {
            link: appPath.notifications,
            icon: <Feather color="white" name="bell" size={24} />,
            name: 'Shoulders',
            desc: 'Training of Shoulders',
        },
        {
            link: appPath.notifications,
            icon: <Feather color="white" name="bell" size={24} />,
            name: 'Biceps',
            desc: 'Training of Biceps',
        },
        {
            link: appPath.notifications,
            icon: <Feather color="white" name="bell" size={24} />,
            name: 'Coast',
            desc: 'Training of Coast',
        },
    ]
    return (
        <YStack paddingBottom={8}>
            <YGroup gap={20} pt={16}>
                {menuBox.map((item, index) => (
                    <YGroup.Item key={index}>
                        <TouchableOpacity onPress={() => router.push(item.link as never)}>
                            <CardsOption name={item.name} desc={item.desc} />
                        </TouchableOpacity>
                    </YGroup.Item>
                ))}
            </YGroup>
        </YStack>
    )
}
