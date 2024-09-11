import { Feather } from '@expo/vector-icons'
import Foundation from '@expo/vector-icons/Foundation'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Octicons from '@expo/vector-icons/Octicons'
import { Text, XStack, YStack, XGroup, YGroup } from 'tamagui'

import { appPath } from '@/common/configs/paths.config'
import { BoxDetailItemProps } from '@/components/core/BoxDetailItem'
import { CardProps } from '@/components/core/Card/Card.types'
import { CardPainelProps } from '@/components/core/CardPainel/CardPainel.types'
import { CardSeriesProps } from '@/components/core/CardSeries/CardSeries.types'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'
export default function CardsPainel({ name, icon }: CardPainelProps) {
    return (
        <XGroup>
            <XStack bg="#262626" jc="space-between">
                <XStack>
                    <XStack gap={20} p={16}>
                        <XStack>{icon}</XStack>
                        <XStack>
                            <Text fontSize={12} fontWeight={600} color="white">
                                {name}
                            </Text>
                        </XStack>
                    </XStack>
                </XStack>
            </XStack>
        </XGroup>
    )
}
