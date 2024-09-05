import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { XStack, Text, View } from 'tamagui'

import { appPath } from '@/common/configs/paths.config'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'
export default function FilterHeader({ title }: { title: string }) {
    console.log(title)
    useProtectedRoute()

    return (
        <XStack>
            <StatusBar style="light" backgroundColor="#52ACFF" />
            <XStack
                pressStyle={{ backgroundColor: '$secondary' }}
                backgroundColor="$secondary"
                height={40}
                width="100%"
                ai="center"
                jc="space-between"
                alignItems="flex-end"
                marginTop="$6"
                borderRadius="$1"
                padding="$2">
                <View marginLeft={10}>
                    <Link href={appPath.projects} style={{ color: '#FFFFFF', lineHeight: 21 }}>
                        Cancel
                    </Link>
                </View>

                <Text mr="$4" color="white" fontSize={16} fontWeight="500" lineHeight={24} alignItems="center">
                    Filter
                </Text>
                <Text fontSize={13} color="#FFFFFF" fontWeight="500" lineHeight={21}>
                    Apply
                </Text>
            </XStack>
        </XStack>
    )
}
