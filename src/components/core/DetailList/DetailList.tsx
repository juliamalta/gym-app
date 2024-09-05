import { Feather } from '@expo/vector-icons'
import { useTranslation } from 'react-i18next'
import { YStack, Text, XStack, Separator } from 'tamagui'

import { DetailListProps } from '@/components/core/DetailList/DetailList.type'

export default function DetailList({
    status,
    projectName,
    projectOwner,
    referral,
    detail,
    text,
    valueNet,
    porcentagem,
    markupValue,
    desc,
    subtotal,
    valueTax,
    valueDelivery,
    valueTotal,
    date,
}: DetailListProps) {
    const { t } = useTranslation('common')
    return (
        <YStack>
            <YStack>
                <YStack pl={16} pr={16} pt="$md" pb="$md" ai="center">
                    <XStack jc="center" gap={5}>
                        <Feather name="alert-triangle" color="#EC9A3C" size={15} style={{ textAlign: 'center' }} />
                        <Text textAlign="center">Requested apprval for a 10% discount</Text>
                    </XStack>
                    <Text textAlign="center" fontSize={11} lineHeight={21}>
                        {t('dateTimeFormat', { money: date })}
                    </Text>
                </YStack>
                <Separator />
                <XStack jc="space-between" pl={16} pr={16} pt="$md" pb="$md">
                    <Text fontSize={13} fontWeight="400" lineHeight={21} color="$textGray">
                        Status
                    </Text>
                    <Text>{status} </Text>
                </XStack>
                <Separator />
                <YStack pl={16} pr={16} pt="$md" pb="$md">
                    <XStack jc="space-between">
                        <Text fontSize={13} fontWeight="400" lineHeight={21} color="$textGray">
                            Project Name
                        </Text>
                        <Text>{projectName}</Text>
                    </XStack>
                    <XStack jc="space-between">
                        <Text fontSize={13} fontWeight="400" color="$textGray">
                            Project Owner
                        </Text>
                        <Text>{projectOwner}</Text>
                    </XStack>
                    <XStack jc="space-between">
                        <Text fontSize={13} fontWeight="400" color="$textGray">
                            Referral
                        </Text>
                        <Text>{referral}</Text>
                    </XStack>
                </YStack>
                <Separator />
                <XStack gap={5} pl={16} pr={16} pt="$md" pb="$md">
                    <XStack gap={4}>
                        <Text fontSize={13} fontWeight="400" lineHeight={21} color="$textBlack">
                            Markup
                        </Text>
                        <Text fontSize={13} fontWeight="400" lineHeight={21} color="$textBlack">
                            {markupValue}
                        </Text>
                    </XStack>
                    <XStack gap={4}>
                        <Text fontSize={13} fontWeight="400" lineHeight={21} color="$textBlack">
                            • Net
                        </Text>
                        <Text fontSize={13} fontWeight="400" lineHeight={21} color="$textBlack">
                            {t('moneyCurrencyFormat', { money: valueNet })}
                        </Text>
                    </XStack>
                    <XStack gap={4}>
                        <Text fontSize={13} fontWeight="400" lineHeight={21} color="$textBlack">
                            • Margin
                        </Text>
                        <Text fontSize={13} fontWeight="400" lineHeight={21} color="$textBlack">
                            {porcentagem}
                        </Text>
                    </XStack>
                </XStack>
                <Separator />
                <YStack p={16} gap={16}>
                    <XStack>
                        <YStack>
                            <Text fontSize={13} fontWeight="400">
                                Coffee Table Verona with Round Top and Square {'\n'}Base
                            </Text>
                            <Text fontSize={12} fontWeight="400" color="#777777" lineHeight={21}>
                                1,0 x 1,100.00
                            </Text>
                        </YStack>
                        <YStack>
                            <Text fontSize={13} fontWeight="500" lineHeight={21} color="$textBlack">
                                1,100.00
                            </Text>
                            <Text fontSize={12} fontWeight="500" lineHeight={21} color="$textGray" textAlign="right">
                                10%
                            </Text>
                        </YStack>
                    </XStack>
                    <Separator />
                    <XStack>
                        <YStack>
                            <Text fontSize={13} fontWeight="400">
                                Coffee table Verona with Round Top and Square {'\n'}Base
                            </Text>
                            <Text fontSize={12} fontWeight="400" color="$textGray" lineHeight={21}>
                                1,0 x 1,100.00
                            </Text>
                        </YStack>
                        <YStack>
                            <Text fontSize={13} fontWeight="500" lineHeight={21} color="$textBlack">
                                1,100.00
                            </Text>
                            <Text fontSize={12} fontWeight="500" lineHeight={21} color="$textGray" textAlign="right">
                                10%
                            </Text>
                        </YStack>
                    </XStack>
                    <Separator />
                    <XStack jc="space-between">
                        <YStack>
                            <Text fontSize={13} fontWeight="400" lineHeight={21} color="$textBlack">
                                A310
                            </Text>
                            <Text fontSize={12} fontWeight="400" lineHeight={21} color="$textGray">
                                {desc}
                            </Text>
                        </YStack>
                        <YStack>
                            <Text fontSize={12} fontWeight="500" lineHeight={21}>
                                2,000.00
                            </Text>
                            <Text fontSize={12} fontWeight="500" lineHeight={21} color="$textGray" textAlign="right">
                                10%
                            </Text>
                        </YStack>
                    </XStack>
                    <Separator />
                    <YStack ai="flex-end">
                        <XStack jc="space-between" width="50%">
                            <Text fontSize={13} fontWeight="400" lineHeight={21}>
                                Subtotal
                            </Text>
                            <Text fontSize={13} fontWeight="400">
                                {t('moneyCurrencyFormat', { money: subtotal })}
                            </Text>
                        </XStack>
                        <XStack jc="space-between" width="50%">
                            <Text fontSize={13} fontWeight="400" lineHeight={21}>
                                Tax
                            </Text>
                            <Text fontSize={13} fontWeight="400">
                                {t('moneyCurrencyFormat', { money: valueTax })}
                            </Text>
                        </XStack>
                        <XStack jc="space-between" width="50%">
                            <Text fontSize={13} fontWeight="400" lineHeight={21}>
                                Delivery
                            </Text>
                            <Text fontSize={13} fontWeight="400">
                                {t('moneyCurrencyFormat', { money: valueDelivery })}
                            </Text>
                        </XStack>
                        <XStack jc="space-between" width="50%">
                            <Text fontSize={13} lineHeight={21} fontWeight="800">
                                Total
                            </Text>
                            <Text fontSize={13} fontWeight="800" lineHeight={21}>
                                {t('moneyCurrencyFormat', { money: valueTotal })}
                            </Text>
                        </XStack>
                    </YStack>
                </YStack>
            </YStack>
        </YStack>
    )
}
