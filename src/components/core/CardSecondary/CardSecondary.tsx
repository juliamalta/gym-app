import { Feather } from '@expo/vector-icons'
import Foundation from '@expo/vector-icons/Foundation'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Octicons from '@expo/vector-icons/Octicons'
import { Text, XStack, YStack, XGroup, YGroup, Avatar } from 'tamagui'

import { appPath } from '@/common/configs/paths.config'
import { BoxDetailItemProps } from '@/components/core/BoxDetailItem'
import { CardProps } from '@/components/core/Card/Card.types'
import { CardPainelProps } from '@/components/core/CardPainel/CardPainel.types'
import { CardSeriesProps } from '@/components/core/CardSeries/CardSeries.types'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'
export default function CardsSecondary({ name, icon }: CardPainelProps) {
    return (
        <XGroup>
            <YStack bg="#262626" jc="space-between" width="100%">
                <XStack>
                    <XStack gap={20} p={16}>
                        <Avatar circular size="$4">
                            <Avatar.Image
                                accessibilityLabel="Cam"
                                src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                            />
                            <Avatar.Fallback backgroundColor="$blue10" />
                        </Avatar>

                        <YStack jc="center" ai="center">
                            <Text fontSize={15} fontWeight={600} color="white">
                                {name}
                            </Text>
                        </YStack>
                    </XStack>
                </XStack>
                <YStack p="$4">
                    <Text fontSize={15} fontWeight={600} color="white">
                        Training B
                    </Text>
                    <XStack gap="$6" pt="$3">
                        <YStack>
                            <Text fontSize={15} fontWeight={600} color="white">
                                Time
                            </Text>
                            <Text fontSize={15} fontWeight={600} color="white">
                                57 min
                            </Text>
                        </YStack>

                        <YStack>
                            <Text fontSize={15} fontWeight={600} color="white">
                                Record
                            </Text>
                            <Text fontSize={15} fontWeight={600} color="white">
                                1
                            </Text>
                        </YStack>
                    </XStack>
                    <YStack pt="$4" gap="$2">
                        <Text fontSize={15} fontWeight={600} color="white">
                            4 sets Supino
                        </Text>
                        <Text fontSize={15} fontWeight={600} color="white">
                            4 sets Supino
                        </Text>
                    </YStack>
                </YStack>
            </YStack>
        </XGroup>
    )
}
