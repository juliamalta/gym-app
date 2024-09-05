import { Feather } from '@expo/vector-icons'
import { memo } from 'react'
import { Separator, Text, XStack, YStack, Dialog as TDialog } from 'tamagui'

import { Button } from '@/components/core/Button'
import { ToastProps } from '@/components/overlay/Toast/Toast.types'

function Toast({ trigger, action, cancel, cancelAction, confirm, title, children, icon }: ToastProps) {
    return (
        <TDialog>
            <TDialog.Trigger>{trigger}</TDialog.Trigger>
            <TDialog.Portal>
                <TDialog.Overlay
                    key="overlay"
                    animation="quick"
                    opacity={0.5}
                    enterStyle={{ opacity: 0 }}
                    exitStyle={{ opacity: 0 }}
                />

                <TDialog.Content
                    borderRadius={16}
                    elevate
                    bg="white"
                    mx={16}
                    key="content"
                    animation={[
                        'quick',
                        {
                            opacity: {
                                overshootClamping: true,
                            },
                        },
                    ]}
                    enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
                    exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
                    x={0}
                    scale={1}
                    opacity={1}
                    y={0}>
                    <YStack>
                        {title && (
                            <TDialog.Title fontSize={16} fontWeight="500">
                                {title}
                            </TDialog.Title>
                        )}

                        {children}
                        <Separator />
                        <XStack ai="center" jc="space-around">
                            <TDialog.Close asChild onPress={cancelAction}>
                                <Text
                                    pressStyle={{ opacity: 0.8 }}
                                    color="$primary"
                                    px="$base"
                                    py="$xxs"
                                    fontWeight="500">
                                    {cancel}
                                </Text>
                            </TDialog.Close>

                            <TDialog.Close asChild onPress={action}>
                                <Text onPress={action} fontSize={16} fontWeight="500" color="$primary">
                                    {confirm}
                                </Text>
                            </TDialog.Close>
                        </XStack>
                    </YStack>
                </TDialog.Content>
            </TDialog.Portal>
        </TDialog>
    )
}

export default memo(Toast)
