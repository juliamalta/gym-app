import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { Button, XStack, Text, View } from 'tamagui'

import { appPath } from '@/common/configs/paths.config'
import { BoxDetailItemProps } from '@/components/core/BoxDetailItem'
import { useAuth } from '@/hooks/useAuth'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'

export default function HeaderSignOut({ title }: { title: string }) {
    useProtectedRoute()
    const menuBox: BoxDetailItemProps[] = [
        {
            link: appPath.notifications,
            icon: <Feather color="white" name="bell" size={24} />,
            title: 'Notifications',
        },
    ]

    return (
        <XStack>
            {menuBox.map((box, index) => (
                <Link href={box.link as string} key={`home-menu-${index}`} asChild>
                    <XStack
                        pressStyle={{ backgroundColor: '$secondary' }}
                        backgroundColor="$secondary"
                        height={84}
                        width="100%"
                        ai="center"
                        jc="space-between"
                        alignItems="flex-end"
                        padding="$2">
                        <View jc="flex-start" ml="$2">
                            <Text color="white">{box.icon}</Text>
                        </View>
                        <Text
                            textAlign="center"
                            ml="$8"
                            color="white"
                            fontSize={16}
                            fontWeight="500"
                            lineHeight={24}
                            alignItems="center">
                            {title}
                        </Text>
                        <Button
                            fontSize={16}
                            color="white"
                            alignItems="flex-end"
                            fontWeight="500"
                            pressStyle={{ backgroundColor: '$secondary', borderColor: '$secondary' }}
                            backgroundColor={'$secondary'}
                            paddingRight="$2"
                            size="$2"
                            onPress={() => signOut()}>
                            Sign Out
                        </Button>
                    </XStack>
                </Link>
            ))}
        </XStack>
    )
}
