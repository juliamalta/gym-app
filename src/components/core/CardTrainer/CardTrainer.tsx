import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Text, XStack, YStack, XGroup } from 'tamagui'

import { CardTrainerProps } from '@/components/core/CardTrainer/CardTrainer.types'

export default function CardTrainer({ name, desc }: CardTrainerProps) {
    return (
        <XGroup>
            <XStack backgroundColor="#d1d5db" borderRadius={8} jc="space-between" f={1}>
                <XStack p={16} alignItems="center" flex={1}>
                    <MaterialCommunityIcons name="weight-lifter" size={48} />
                    <YStack pl={16} flex={1}>
                        <Text fontSize={14} numberOfLines={0} adjustsFontSizeToFit>
                            {name}
                        </Text>
                    </YStack>
                </XStack>
            </XStack>
        </XGroup>
    )
}
