import { useAtom } from 'jotai'
import { AnimatePresence, YStack, styled } from 'tamagui'

import { TabStore } from '@/components/layout/Tabs/atoms/tab.atoms'
import { TabContentProps } from '@/components/layout/Tabs/Tab.types'

export default function TabContent({ tabIndex, children, ...props }: TabContentProps) {
    const [tabIndexAtom] = useAtom(TabStore.tabIndex)
    const [prevIndex] = useAtom(TabStore.prevIndex)

    const direction = (() => {
        return tabIndexAtom > prevIndex ? -1 : 1
    })()

    const enterVariant = direction === 1 ? 'isLeft' : direction === -1 ? 'isRight' : 'defaultFade'
    const exitVariant = direction === 1 ? 'isRight' : direction === -1 ? 'isLeft' : 'defaultFade'
    return (
        <>
            {tabIndexAtom === tabIndex ? (
                <AnimatePresence exitBeforeEnter enterVariant={enterVariant} exitVariant={exitVariant}>
                    <AnimatedYStack key={tabIndex} animation="quick" x={0} opacity={1} flex={1} {...props}>
                        {children}
                    </AnimatedYStack>
                </AnimatePresence>
            ) : null}
        </>
    )
}

const AnimatedYStack = styled(YStack, {
    variants: {
        isLeft: { true: { x: -50, opacity: 0 } },
        isRight: { true: { x: 50, opacity: 0 } },
        defaultFade: { true: { opacity: 0 } },
    } as const,
})
