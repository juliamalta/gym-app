import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { YStack, Text, XStack } from 'tamagui'

import { HeaderBar } from '@/components/layout/HeaderBar'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'
import { useMobileDashboardQuery } from '@/data/queries'

import { DashboardItem } from './_components/DashboardItem'
import { SelectOrgModal } from './_components/SelectOrgModal'

export default function Dashboard() {
    const { t } = useTranslation(['common', 'dashboard'])
    const { data, error } = useMobileDashboardQuery()
    console.log(data, error)

    const items = useMemo(
        () => [
            {
                title: t('dashboard:topSection.first.title'),
                filter: t('dashboard:topSection.first.filter', { value: 10 }),
                value: t('moneyCurrencyFormat', { money: 8097 }),
            },
            {
                title: t('dashboard:topSection.second.title'),
                filter: t('dashboard:topSection.second.filter', { value: 40 }),
                value: t('moneyCurrencyFormat', { money: 312134 }),
            },
            {
                title: t('dashboard:topSection.third.title'),
                filter: t('dashboard:topSection.third.filter', { value: 100 }),
                value: t('moneyCurrencyFormat', { money: 1930000 }),
            },
            {
                title: t('dashboard:topSection.fourth.title'),
                filter: t('dashboard:topSection.fourth.filter', { value: 10 }),
                value: t('moneyCurrencyFormat', { money: 10000 }),
            },
        ],
        [t]
    )

    return (
        <ScreenTemplate
            options={{
                headerShown: true,
                header: () => <HeaderBar title="My Company" />,
            }}
            fullscreen>
            <YStack p={16} f={1}>
                <YStack gap={8}>
                    <Text fontSize={24} lineHeight={27} mt={16} fontWeight="400">
                        Hi ,Welcome in GYM Training
                    </Text>
                </YStack>
            </YStack>
            <SelectOrgModal />
        </ScreenTemplate>
    )
}
