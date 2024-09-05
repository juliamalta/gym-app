import { useTranslation } from 'react-i18next'
import { AlertDialog, Button, XStack, YStack } from 'tamagui'

import { ConfirmDialogProps } from './ConfirmDialog.types'

export default function ConfirmDialog({ title, description, opened, onClose }: ConfirmDialogProps) {
    const { t } = useTranslation('common')

    return (
        <AlertDialog open={opened}>
            <AlertDialog.Portal>
                <AlertDialog.Overlay
                    key="overlay"
                    animation="100ms"
                    opacity={0.65}
                    enterStyle={{ opacity: 0 }}
                    exitStyle={{ opacity: 0 }}
                />
                <AlertDialog.Content
                    bordered
                    elevate
                    mx="$xl"
                    key="content"
                    animation={[
                        '100ms',
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
                    <YStack gap="$2.5">
                        <AlertDialog.Title fontWeight="500" fontSize={24} lineHeight={42}>
                            {title}
                        </AlertDialog.Title>
                        <AlertDialog.Description fontSize={14} lineHeight={21}>
                            {description}
                        </AlertDialog.Description>
                        <XStack gap="$3" justifyContent="flex-end" mt="$2">
                            <AlertDialog.Action asChild>
                                <Button theme="active" onPress={onClose}>
                                    {t('close')}
                                </Button>
                            </AlertDialog.Action>
                        </XStack>
                    </YStack>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog>
    )
}
