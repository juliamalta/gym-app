import React from 'react'
import { useTranslation } from 'react-i18next'
import { Spinner, XStack, Text } from 'tamagui'

export default function Loading() {
    const { t } = useTranslation('common')
    return (
        <XStack
            f={1} //
            jc="center"
            ai="center"
            gap={16}
            backgroundColor="white">
            <Spinner size="small" color="$blue4Dark" />
            <Text fontSize={16} lineHeight={21} fontWeight="500">
                {t('loading')}
            </Text>
        </XStack>
    )
}
