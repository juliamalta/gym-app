import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { FlatList, useWindowDimensions } from 'react-native'
import { XStack } from 'tamagui'

import { TabStore } from '@/components/layout/Tabs/atoms/tab.atoms'
import { TabListProps } from '@/components/layout/Tabs/Tab.types'

export default function TabList({ children, indicatorProp, ...props }: TabListProps) {
    const [tabIndex] = useAtom(TabStore.tabIndex)
    const [tabSize, setTabSize] = useAtom(TabStore.tabWidthAndX)
    const { width } = useWindowDimensions()
    const widthSize = tabSize.reduce((sum, item) => sum + item.width, 0) > width

    useEffect(() => {
        setTabSize([])
    }, [setTabSize])

    return (
        <XStack
            w={widthSize ? tabSize.reduce((sum, item) => sum + item.width, 0) : null}
            h={32}
            mx="auto"
            bg="$bgGray"
            borderRadius={2}
            position="relative"
            mt="$lg"
            overflow="hidden"
            {...props}>
            {widthSize ? (
                <FlatList
                    data={[{}]}
                    horizontal
                    contentContainerStyle={{ justifyContent: 'center', marginHorizontal: 'auto' }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={() => (
                        <>
                            {children}
                            {tabSize && (
                                <XStack
                                    borderRadius={6}
                                    zi={20}
                                    animation="100ms"
                                    bg="#E5E5EA"
                                    position="absolute"
                                    h={32}
                                    bottom={0}
                                    width={tabSize.find((i) => i.tabIndex === tabIndex)?.width}
                                    x={tabSize.find((i) => i.tabIndex === tabIndex)?.x}
                                    {...indicatorProp}></XStack>
                            )}
                        </>
                    )}
                />
            ) : (
                <>
                    {children}
                    {tabSize && (
                        <XStack
                            borderRadius={6}
                            zi={10}
                            animation="100ms"
                            bg="white"
                            position="absolute"
                            h={32}
                            bottom={0}
                            width={tabSize.find((i) => i.tabIndex === tabIndex)?.width}
                            x={tabSize.find((i) => i.tabIndex === tabIndex)?.x}
                            {...indicatorProp}></XStack>
                    )}
                </>
            )}
        </XStack>
    )
}
