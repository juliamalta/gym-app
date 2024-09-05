import { Stack } from 'expo-router'
import { memo } from 'react'
import { YStack } from 'tamagui'

import { ScreenTemplateProps } from './ScreenTemplate.types'

function ScreenTemplate({ options, fullscreen, children }: ScreenTemplateProps) {
    return (
        <>
            <Stack.Screen options={options} />
            <YStack f={1} jc="center" ai="center" backgroundColor="$backgroundTransparent" fullscreen={fullscreen}>
                {children}
            </YStack>
        </>
    )
}

export default memo(ScreenTemplate)
