import { Feather, Octicons } from '@expo/vector-icons'
import { Link, usePathname } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useAtomValue } from 'jotai'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Text, View, XStack } from 'tamagui'

import { appPath } from '@/common/configs/paths.config'
import useAtomWithModal from '@/hooks/useAtomWithModal'
import { appStore } from '@/store/app.atoms'
import { modalStore } from '@/store/modal.atoms'

export default function HeaderBar({ title }: { title?: string }) {
    const { isOpened, toggle } = useAtomWithModal(modalStore.orgModalAtom)
    const selectOrg = useAtomValue(appStore.selectedOrg)
    const pathname = usePathname()
    const insets = useSafeAreaInsets()

    return (
        <XStack
            pressStyle={{ backgroundColor: '$secondary' }}
            backgroundColor="$secondary"
            width="100%"
            pt={insets.top * 2}
            px={16}
            pb={10}>
            <StatusBar style="light" />
            <Link href={appPath.notifications}>
                <View w={24}>
                    <Feather color="white" name="bell" size={24} />
                </View>
            </Link>

            {(pathname === appPath.projects.index || pathname === appPath.salesOrders.index) && (
                <>
                    <Text
                        textAlign="center"
                        color="white"
                        fontSize={16}
                        fontWeight="500"
                        lineHeight={24}
                        mx="auto"
                        alignItems="center">
                        {title}
                    </Text>
                    <Link href={appPath.filter}>
                        <View w={24}>
                            <Octicons name="filter" size={24} color="white" />
                        </View>
                    </Link>
                </>
            )}
            {pathname === appPath.dashboard && (
                <>
                    <XStack
                        borderRadius={8}
                        pressStyle={{ opacity: 0.5 }}
                        mx="auto"
                        ai="center"
                        gap={4}
                        onPress={toggle}>
                        <Text
                            textAlign="center"
                            color="white"
                            fontSize={16}
                            fontWeight="500"
                            lineHeight={24}
                            mx="auto"
                            alignItems="center">
                            {selectOrg}
                        </Text>
                        <Feather name={isOpened ? 'chevron-up' : 'chevron-down'} size={16} color="white" />
                    </XStack>
                    <View w={24}></View>
                </>
            )}
        </XStack>
    )
}
