import { Feather, AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import Entypo from '@expo/vector-icons/Entypo'
import { Link, usePathname } from 'expo-router'
import React from 'react'
import { XStack, Text, YStack } from 'tamagui'

import { appPath } from '@/common/configs/paths.config'
import ProjectIcon from '@/components/icons/ProjectIcon'
import SalesIcon from '@/components/icons/SalesIcon'

export default function NavigationBar() {
    const pathname = usePathname()

    const navigationItems = [
        {
            link: appPath.dashboard,
            icon: <Feather name="home" size={24} />,
            title: 'Dashboard',
        },
        {
            link: appPath.projects.index,
            icon: (
                <MaterialCommunityIcons
                    name="weight-lifter"
                    size={24}
                    color={pathname === appPath.projects.index ? '#4f46e5' : 'white'}
                />
            ),
            title: 'Exercícios',
        },
        {
            link: appPath.salesOrders.index,
            icon: (
                <MaterialIcons
                    name="sports-gymnastics"
                    size={24}
                    color={pathname === appPath.salesOrders.index ? '#4f46e5' : 'white'}
                />
            ),
            title: 'My training',
        },
        {
            link: appPath.chat,
            icon: <Entypo name="chat" size={24} />,
            title: 'Social',
        },
        {
            link: appPath.more,
            icon: <Feather name="more-horizontal" size={24} />,
            title: 'More',
        },
    ]

    return (
        <XStack
            backgroundColor="#0c0a09"
            w="100%"
            height={83}
            px={24}
            pb={34}
            pt={8}
            jc="space-between"
            alignItems="center"
            gap={2} //
            ai="center">
            {navigationItems.map((box, index) => (
                <Link replace href={box.link as string} key={`home-menu-${index}`} asChild>
                    <YStack pressStyle={{ backgroundColor: '#0c0a09' }} gap={2} ai="center" jc="center">
                        <Text color={box.link === pathname ? '#4f46e5' : 'white'}>{box.icon}</Text>
                        <Text
                            lineHeight={15}
                            color={box.link === pathname ? '#4f46e5' : 'white'}
                            fontSize={10}
                            textAlign="center"
                            fontWeight="500">
                            {box.title}
                        </Text>
                    </YStack>
                </Link>
            ))}
        </XStack>
    )
}
