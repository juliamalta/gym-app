import { useAtom } from 'jotai'
import { Text, XStack } from 'tamagui'

import { TabStore } from '@/components/layout/Tabs/atoms/tab.atoms'
import { TabContentProps } from '@/components/layout/Tabs/Tab.types'

const TabHeader = ({ tabIndex, children, ...props }: TabContentProps) => {
    const [tabIndexAtom, setTabIndex] = useAtom(TabStore.tabIndex)
    const [, setPrevTabIndex] = useAtom(TabStore.prevIndex)
    const [, setTabSize] = useAtom(TabStore.tabWidthAndX)

    return (
        <XStack
            onLayout={({ nativeEvent }) =>
                setTabSize((prev) => {
                    if (prev) {
                        return [...prev, { tabIndex, width: nativeEvent.layout.width, x: nativeEvent.layout.x }]
                    }
                    return [{ tabIndex, width: nativeEvent.layout.width, x: nativeEvent.layout.x }]
                })
            }
            borderRadius={2}
            px={45}
            ai="center"
            jc="center"
            zi={50}
            pressStyle={{ opacity: 0.5 }}
            onPress={() => {
                setPrevTabIndex(tabIndexAtom)
                setTabIndex(tabIndex)
            }}
            {...props}>
            <Text color={tabIndexAtom === tabIndex ? '$textBlack' : '$textBlack'} w={90}>
                {children}
            </Text>
        </XStack>
    )
}

export default TabHeader
