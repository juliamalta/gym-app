import { XStack, Text, YStack, Avatar, View } from 'tamagui'

import { ListUserProps } from '@/components/core/ListUser/ListUser.types'

export default function ListUser({ name, email }: ListUserProps) {
    const avatarImage = require('../../../../assets/avatar.png')
    return (
        <XStack
            backgroundColor="#FFFFFF"
            borderRadius={8}
            width="100%"
            paddingTop={8}
            paddingRight={16}
            paddingBottom={8}
            paddingLeft={8}
            height={66}>
            <Avatar size={48} circular space="$2">
                <Avatar.Image
                    accessibilityLabel="Cam"
                    src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                />
                <Avatar.Fallback backgroundColor="$gray5" />
            </Avatar>
            <View ml={16}>
                <Text fontSize={16} lineHeight={24} fontWeight="500">
                    {name}
                </Text>
                <Text>{email}</Text>
            </View>
        </XStack>
    )
}
