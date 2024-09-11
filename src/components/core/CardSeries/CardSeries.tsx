import Foundation from '@expo/vector-icons/Foundation'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Text, XStack, YStack, XGroup } from 'tamagui'

import { CardProps } from '@/components/core/Card/Card.types'
import { CardSeriesProps } from '@/components/core/CardSeries/CardSeries.types'
export default function CardsSeries({ name, desc }: CardSeriesProps) {
    return (
        <XGroup>
            <XStack bg="#171717" borderRadius={8} jc="space-between" f={1}>
                <XStack p={16}>
                    <YStack pl={16} m={5}>
                        <Text color="white">{name}</Text>
                        <Text fontSize={12} fontWeight={600} color="white">
                            {desc}
                        </Text>
                    </YStack>
                </XStack>
                <YStack p={16} m={5}>
                    <MaterialIcons name="more-vert" size={24} color="white" />
                </YStack>
            </XStack>
        </XGroup>
    )
}
