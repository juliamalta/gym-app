import React from 'react'
import { Text, YStack } from 'tamagui'

import { DashboardItemProps } from '@/containers/pages/dashboardPage/components/DashboardItem/DashboardItem.types'
export default function DashboardItem({ title, filter, value }: DashboardItemProps) {
    return (
        <YStack w="50%">
            <Text fontSize={10} fontWeight="500" lineHeight={15} color="$textBlack">
                {title}
            </Text>
            <Text fontSize={16} fontWeight="500" lineHeight={24} color="$textBlack">
                {value}
            </Text>
            <Text fontSize={11} fontWeight="400" lineHeight={21} color="$textGray">
                {filter}
            </Text>
        </YStack>
    )
}
