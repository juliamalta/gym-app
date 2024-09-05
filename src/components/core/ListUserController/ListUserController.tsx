import { Entypo } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { YStack, Image, Text, Separator, XStack } from 'tamagui'

import { ListUserControllerProps } from '@/components/core/ListUserController/ListUserController.types'
export default function ListUserController({ text, icon, navigationIcon }: ListUserControllerProps) {
    return (
        <YStack>
            <XStack jc="space-between" ai="center">
                <XStack ml={16} mt={10}>
                    {icon}
                </XStack>
                <YStack f={1} ml={16}>
                    <Text
                        fontSize={13}
                        lineHeight={21}
                        fontWeight="400"
                        color="#000000"
                        ml={2}
                        paddingTop={8}
                        paddingBottom={4}>
                        {text}
                    </Text>
                </YStack>
                <YStack mr={16} mt={8}>
                    {navigationIcon}
                </YStack>
            </XStack>
        </YStack>
    )
}
