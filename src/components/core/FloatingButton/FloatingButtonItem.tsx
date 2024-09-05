import { Button, Text, XStack } from 'tamagui'

import { FloatingButtonItemProps } from './FloatingButton.types'

function FloatingButtonItem({ text, icon, action }: FloatingButtonItemProps) {
    return (
        <XStack ai="center" space="$2" jc="flex-end">
            <Text
                fontSize={16}
                color="white"
                fontWeight="600"
                theme="blue"
                backgroundColor="$blue4Dark"
                paddingHorizontal="$4"
                paddingVertical="$2"
                borderRadius="$3"
                onPress={() => {
                    action && action()
                }}>
                {text}
            </Text>
            <Button
                circular
                icon={icon}
                themeInverse
                theme="blue"
                onPress={() => {
                    action && action()
                }}
            />
        </XStack>
    )
}

export default FloatingButtonItem
