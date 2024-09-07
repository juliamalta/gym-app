import { useTranslation } from 'react-i18next'
import { Image } from 'react-native'
import { View, YStack, Text } from 'tamagui'

import { useKeyboardOpened } from '@/hooks/core/useKeyboardOpened'

export default function SignInHeader() {
    const { t } = useTranslation('auth')
    const { isKeyboardOpened } = useKeyboardOpened()

    return (
        <YStack ai="center" gap="$md" pt={isKeyboardOpened ? '$xl6' : '$15'}>
            <View width="$xl7" height="$xl7">
                <Image style={{ width: '100%', height: '100%' }} source={require('../../../../../assets/logo.png')} />
            </View>
            <View ai="center">
                <Text alignItems="center" fontWeight="500" fontSize={28} lineHeight={42} color="white">
                    {t('title')}
                </Text>
                <Text alignItems="center" fontSize={16} lineHeight={24} color="white">
                    {t('description')}
                </Text>
            </View>
        </YStack>
    )
}
