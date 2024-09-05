import { Entypo } from '@expo/vector-icons'
import { Feather, FontAwesome } from '@expo/vector-icons'
import { Stack } from 'expo-router'
import { useAtom } from 'jotai'
import React, { useState } from 'react'
import { FlatList, useWindowDimensions } from 'react-native'
import { YStack, Text, Separator, View, XStack, Square } from 'tamagui'

import { FilterHeader } from '@/components/layout/FilterHeader'
import { Tabs } from '@/components/layout/Tabs'
import { appStore } from '@/store/app.atoms'
export default function FilterPage() {
    const [selectedOrg, setSelectedOrg] = useAtom(appStore.selectedOrg)
    const [selected, setSelected] = useState(() => selectedOrg)
    const title = 'Filter'
    const items = ['Filter', 'Sort']
    const [value, setValue] = useState(items[0])
    const onApply = () => {
        setSelectedOrg(selected)
        close()
    }

    return (
        <View>
            <Stack.Screen
                options={{
                    title: 'Filter',
                    headerShown: true,
                    // statusBarHidden: true,
                    header: () => <FilterHeader title={title} />,
                }}
            />

            <Tabs>
                <Tabs.List>
                    <Tabs.Header tabIndex={0}>Filter</Tabs.Header>
                    <Tabs.Header tabIndex={1}>Sort</Tabs.Header>
                </Tabs.List>
                <Tabs.View>
                    <Tabs.Content tabIndex={0}>
                        <XStack p={16} jc="space-between">
                            <XStack>
                                <Text fontSize={13} fontWeight="400">
                                    Status
                                </Text>
                            </XStack>
                            <XStack ai="center">
                                <Text fontSize={13} fontWeight="400" color="$primary">
                                    Open
                                </Text>
                                <Entypo name="chevron-small-right" size={20} color="#777777" />
                            </XStack>
                        </XStack>
                        <Separator />
                        <XStack p={16} jc="space-between">
                            <XStack>
                                <Text fontSize={13} fontWeight="400">
                                    Salesperson
                                </Text>
                            </XStack>
                            <XStack ai="center">
                                <Text color="$primary">All Salesperson</Text>
                                <Entypo name="chevron-small-right" size={20} color="#777777" />
                            </XStack>
                        </XStack>
                        <Separator />
                    </Tabs.Content>
                    <Tabs.Content tabIndex={1}>
                        <YStack p={16}>
                            <Text color="$textGray" fontSize={13} fontWeight="400">
                                Sort by
                            </Text>
                            <FlatList
                                data={['Amount', 'Client Name', 'Last Activity']}
                                renderItem={({ item }) => (
                                    <>
                                        <XStack
                                            p="$2"
                                            ai="center"
                                            gap={8}
                                            pressStyle={{ opacity: 0.5 }}
                                            onPress={() => setSelected(item)}>
                                            <Text fontSize={13} fontWeight="400" color="$textBlack">
                                                {item}
                                            </Text>
                                            {selected === item && (
                                                <Text ml="auto" color="$primary">
                                                    <Feather name="check" size={24} />
                                                </Text>
                                            )}
                                        </XStack>
                                        <Separator />
                                    </>
                                )}
                            />
                        </YStack>
                        <YStack p={16}>
                            <Text color="$textGray" fontSize={13} fontWeight="400">
                                Order
                            </Text>
                            <FlatList
                                data={['Ascendant', 'Decendant']}
                                renderItem={({ item }) => (
                                    <>
                                        <XStack
                                            p="$2"
                                            ai="center"
                                            gap={8}
                                            pressStyle={{ opacity: 0.5 }}
                                            onPress={() => setSelected(item)}>
                                            <Text fontSize={13} fontWeight="400" color="$textBlack">
                                                {item}
                                            </Text>
                                            {selected === item && (
                                                <Text ml="auto" color="$primary">
                                                    <Feather name="check" size={24} />
                                                </Text>
                                            )}
                                        </XStack>
                                        <Separator />
                                    </>
                                )}
                            />
                        </YStack>
                    </Tabs.Content>
                </Tabs.View>
            </Tabs>
        </View>
    )
}
