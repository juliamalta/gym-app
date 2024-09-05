import { Feather } from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Link } from 'expo-router'
import React from 'react'
import { XStack, Text, View } from 'tamagui'

import { appPath } from '@/common/configs/paths.config'
import { BoxDetailItemProps } from '@/components/core/BoxDetailItem'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'

export default function ChatHeader({ title }: { title: string }) {
    useProtectedRoute()
    const menuBox: BoxDetailItemProps[] = [
        {
            link: appPath.dashboard,
            icon: <Ionicons name="chatbox-outline" size={24} color="white" />,
            title: 'My Company',
        },
    ]

    return (
        <XStack>
            {menuBox.map((box, index) => (
                <Link href={box.link as string} key={`home-menu-${index}`} asChild>
                    <XStack
                        pressStyle={{ backgroundColor: '$secondary' }}
                        backgroundColor="$secondary"
                        height={130}
                        width="100%"
                        jc="space-between"
                        ac="space-around"
                        alignItems="flex-end"
                        marginTop="$1"
                        padding="$2">
                        <View jc="flex-start" ml="$2">
                            <Text color="white">{box.icon}</Text>
                        </View>

                        <Text color="white" fontSize={16} fontWeight="500" lineHeight={24}>
                            {title}
                        </Text>
                        <Text></Text>
                    </XStack>
                </Link>
            ))}
        </XStack>
    )
}
