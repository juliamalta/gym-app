import { Feather } from '@expo/vector-icons'
import React from 'react'
import { XStack, Text, View, YStack } from 'tamagui'

import { StackScreen } from '@/components/layout/StackScreen'
export default function DetailSalesHeader() {
    return (
        <View backgroundColor="$secondary" height={161}>
            <StackScreen title="My Training"></StackScreen>
            <YStack>
                <View ai="center" pt="$md">
                    <Text fontSize={22} fontWeight="500" color="#FFFFFF" lineHeight={33}>
                        Série A
                    </Text>
                    <XStack>
                        <Text textAlign="center" fontSize={16} fontWeight="500" color="#87dcff" lineHeight={24}>
                            Training
                        </Text>
                        <Feather size={25} color="#B7DCFF" name="chevron-right" />
                    </XStack>
                </View>
            </YStack>
        </View>
    )
}
