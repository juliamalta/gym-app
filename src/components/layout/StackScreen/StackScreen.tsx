import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Text, XStack } from 'tamagui'

import { appPath } from '@/common/configs'
import { IStackScreenProps } from '@/components/layout/StackScreen/StackScreen.types'

export default function StackScreen({ title, children }: IStackScreenProps) {
    const insets = useSafeAreaInsets()

    const handleBack = () => {
        if (router.canGoBack()) {
            router.back()
        } else {
            router.replace(appPath.dashboard as never)
        }
    }

    return (
        <XStack jc="space-between" width="60%" pt={insets.top + 16} backgroundColor="$secondary" h={insets.top + 45}>
            <Text onPress={() => handleBack()}>
                <Feather color="white" size={30} name="chevron-left" />
            </Text>
            <Text color="white" fontSize={16} fontWeight="500" textAlign="center">
                {title}
            </Text>
        </XStack>
    )
}
