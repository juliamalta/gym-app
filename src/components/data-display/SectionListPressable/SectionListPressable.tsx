/* eslint-disable @typescript-eslint/no-explicit-any */
import { Feather } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React, { Fragment } from 'react'
import { FlatList, View } from 'react-native'
import { ListItem, Spinner, Text, XStack, YStack } from 'tamagui'

import { SectionListPressableProps } from './SectionListPressable.types'

function SectionListPressable({ sections, gutters, fetchNext, itemStyle, isLoading }: SectionListPressableProps) {
    function renderItem({ item }: any) {
        const { to, title, id } = item
        return (
            <Link href={{ pathname: to, params: { title, id } }} asChild>
                <ListItem
                    borderColor="$gray4"
                    backgroundColor="$gray1Light"
                    borderWidth="$0.5"
                    borderRadius="$3"
                    borderLeftWidth="$1.5"
                    size="$3"
                    marginTop="$1.5"
                    marginBottom="$1.5"
                    pressStyle={{ backgroundColor: '$gray3' }}
                    iconAfter={<Feather name="chevron-right" size={20} />}
                    {...itemStyle}>
                    <YStack space="$1" marginVertical="$2" w="85%">
                        <Text fontSize={16} fontWeight="600" numberOfLines={1} f={1}>
                            {title}
                        </Text>
                        <Text color="$gray10Light" numberOfLines={1} f={1}>
                            {item.description}
                        </Text>
                    </YStack>
                </ListItem>
            </Link>
        )
    }

    return (
        <View style={{ maxHeight: '100%', width: '100%', backgroundColor: 'white' }}>
            {sections.map((section, index) => {
                const { title, data } = section

                if (!data.length) {
                    return (
                        <Fragment key={`section-${section.title}-${index}-empty`}>
                            {title && (
                                <XStack
                                    backgroundColor="white"
                                    paddingHorizontal={gutters ? '$3' : '$0'}
                                    marginTop={index && '$2'}>
                                    <Text fontSize={14} color="$gray10Light" fontWeight="500" textTransform="uppercase">
                                        {title}
                                    </Text>
                                </XStack>
                            )}
                            <YStack
                                f={1}
                                ai="center"
                                jc="center"
                                ac="center"
                                marginTop="$8"
                                space="$1"
                                minHeight="$6"
                                key={`section-${section.title}-empty`}>
                                <Text color="$blue4Dark">
                                    <MaterialCommunityIcons name="tab-search" size={42} />
                                </Text>
                                <Text marginTop="$1.5" fontWeight="500" fontSize={14} color="$gray10Light">
                                    Nenhum registro disponível.
                                </Text>
                            </YStack>
                        </Fragment>
                    )
                }

                return (
                    <Fragment key={`section-${section.title}-${index}`}>
                        {title && (
                            <XStack
                                backgroundColor="white"
                                paddingHorizontal={gutters ? '$3' : '$0'}
                                marginTop={index && '$2'}>
                                <Text fontSize={14} color="$gray10Light" fontWeight="500" textTransform="uppercase">
                                    {title}
                                </Text>
                            </XStack>
                        )}
                        <YStack margin={gutters ? '$2' : '$0'} marginTop="$1">
                            <FlatList
                                onEndReached={fetchNext && fetchNext}
                                onEndReachedThreshold={2}
                                scrollsToTop
                                keyExtractor={(item) => `section-item-${item.title}-${item.id}-${index}`}
                                data={data}
                                renderItem={renderItem}></FlatList>
                            {isLoading && (
                                <YStack ai="center" jc="center" w="100%" h="$2" my="$2" backgroundColor="white">
                                    <Spinner size="large" color="$blue4Dark" />
                                </YStack>
                            )}
                        </YStack>
                    </Fragment>
                )
            })}
        </View>
    )
}

export default SectionListPressable
