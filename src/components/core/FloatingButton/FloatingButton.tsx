import { Feather } from '@expo/vector-icons'
import { AnimatePresence, Button, YStack } from 'tamagui'

import useDisclosure from '@/hooks/useDisclosure'

import { FloatingButtonProps } from './FloatingButton.types'
import FloatingButtonItem from './FloatingButtonItem'

function FloatingButton({ icon, menu }: FloatingButtonProps) {
    const [isOpened, { toggle, close }] = useDisclosure()

    return (
        <>
            <Button
                zIndex={10}
                animation="quick"
                rotate={isOpened ? '-45deg' : '0deg'}
                icon={icon || <Feather name="plus" size={32} color="white" />}
                size="$6"
                circular
                themeInverse
                theme="blue"
                position="absolute"
                bottom="$4"
                right="$4"
                onPress={() => toggle()}
            />
            <AnimatePresence>
                {isOpened && (
                    <>
                        <YStack onPress={() => close()} fullscreen opacity={0} />
                        <YStack
                            marginVertical="$1"
                            animation="quick"
                            enterStyle={{
                                x: 300,
                            }}
                            exitStyle={{
                                x: 300,
                            }}
                            space="$2"
                            position="absolute"
                            bottom="$12"
                            right="$5">
                            {menu.map((item, index) => (
                                <FloatingButtonItem
                                    key={`floating-button-item-${index}`}
                                    {...item}
                                    action={() => {
                                        close()
                                        item.action && item.action()
                                    }}
                                />
                            ))}
                        </YStack>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default FloatingButton
