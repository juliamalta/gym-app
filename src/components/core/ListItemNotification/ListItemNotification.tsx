import { YStack, Text, Separator } from 'tamagui'

import { ListItemNotificationProps } from '@/components/core/ListItemNotification/ListItemNotification.types'

export default function ListItemNotification({ title, text, customer, project }: ListItemNotificationProps) {
    return (
        <YStack>
            <Text fontSize={13} fontWeight="400" lineHeight={21} color="$textBlack">
                {title}
            </Text>
            <Text color="$textGray" fontSize={11} fontWeight="400">
                {text}
            </Text>
            <Text color="$textGray" fontSize={11} fontWeight="400">
                {customer}
            </Text>
            <Text color="$textGray" fontSize={11} fontWeight="400">
                {project}
            </Text>
        </YStack>
    )
}
