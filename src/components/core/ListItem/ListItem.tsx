import { useTranslation } from 'react-i18next'
import { XStack, Text, YStack } from 'tamagui'

import { ListItemProps } from '@/components/core/ListItem/ListItem.types'
import { getColorForSituation } from '@/components/core/ListItem/ListItemOptions'
export default function ListItem({ name, desc, markup, price, situation }: ListItemProps) {
    const { t } = useTranslation('common')
    const textColor = getColorForSituation(situation)
    return (
        <YStack>
            <XStack jc="space-between" pt="$md" pb="$md">
                <YStack>
                    <Text fontWeight="500" fontSize={14} lineHeight={21}>
                        {name}
                    </Text>
                    <Text color="$textGray" fontWeight="400" fontSize={12} lineHeight={21}>
                        {desc}
                    </Text>
                    <Text color="$textGray" fontWeight="400" fontSize={12} lineHeight={21}>
                        {markup}
                    </Text>
                </YStack>
                <YStack>
                    <Text fontWeight="400" fontSize={20} textAlign="right" ai="flex-start">
                        {t('moneyCurrencyFormat', { money: price })}
                    </Text>

                    <Text fontWeight="400" fontSize={12} textAlign="right" style={{ color: textColor }}>
                        {situation}
                    </Text>
                </YStack>
            </XStack>
        </YStack>
    )
}
