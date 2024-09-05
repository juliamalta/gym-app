import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Text, XStack, YStack, XGroup } from 'tamagui'

import { CardProps } from '@/components/core/Card/Card.types'
export default function Card({ name, desc }: CardProps) {
    return (
        <XGroup>
            <XStack backgroundColor="#d1d5db" borderRadius={8} jc="space-between" f={1}>
                <XStack p={16}>
                    <MaterialCommunityIcons name="weight-lifter" size={48} />
                    <YStack pl={16} m={5}>
                        <Text>{name}</Text>
                        <Text fontSize={12} fontWeight={600}>
                            {desc}
                        </Text>
                    </YStack>
                </XStack>
                <YStack p={16} m={5}>
                    <MaterialIcons name="more-vert" size={24} color="#3b0764" />
                </YStack>
            </XStack>
        </XGroup>
    )
}
