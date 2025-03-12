import { Feather } from '@expo/vector-icons'
import Foundation from '@expo/vector-icons/Foundation'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Octicons from '@expo/vector-icons/Octicons'
import { Text, XStack, YStack, XGroup, YGroup, AVat } from 'tamagui'

import { appPath } from '@/common/configs/paths.config'
import { BoxDetailItemProps } from '@/components/core/BoxDetailItem'
import { CardProps } from '@/components/core/Card/Card.types'
import { CardPainelProps } from '@/components/core/CardPainel/CardPainel.types'
import { CardSeriesProps } from '@/components/core/CardSeries/CardSeries.types'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'
export default function CardsPrimary({ name, icon }: CardPainelProps) {
    return (
        <XGroup>
            <XStack bg="#4f46e5" jc="space-between" width="100%">
                <XStack>
                    <XStack gap={20} p={16}>
                        <XStack>{icon}</XStack>
                        <XStack jc="center" ai="center">
                            <Text fontSize={15} fontWeight={600} color="white">
                                {name}
                            </Text>
                        </XStack>
                    </XStack>
                </XStack>
            </XStack>
        </XGroup>
    )
}
