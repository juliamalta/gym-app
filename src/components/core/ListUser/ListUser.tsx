import AntDesign from '@expo/vector-icons/AntDesign'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native'
import { XStack, Text, Avatar, View, YStack } from 'tamagui'

import { ListUserProps } from '@/components/core/ListUser/ListUser.types'

export default function ListUser({ name, email }: ListUserProps) {
    const avatarImage = require('../../../../assets/avatar.png')
    return (
        <YStack
            borderRadius={8}
            width="100%"
            paddingTop={8}
            paddingRight={16}
            paddingBottom={8}
            paddingLeft={8}
            ac="center"
            ai="center">
            <YStack>
                <TouchableOpacity>
                    <Avatar size={90} circular space="$2">
                        <Avatar.Image
                            accessibilityLabel="Cam"
                            src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                        />
                        <Avatar.Fallback backgroundColor="$gray5" />
                    </Avatar>
                    <XStack jc="center" pt={16}>
                        <AntDesign name="upload" size={24} color="white" />
                    </XStack>
                </TouchableOpacity>
            </YStack>
            <View ml={16} pt={5}>
                <Text fontSize={20} lineHeight={24} fontWeight="500" color="white">
                    {name}
                </Text>
                <Text color="white">{email}</Text>
            </View>
        </YStack>
    )
}
