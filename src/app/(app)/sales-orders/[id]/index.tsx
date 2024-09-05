import { Stack } from 'expo-router'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Separator, YStack, XStack } from 'tamagui'
import { ScrollView, Text } from 'tamagui'
import { YGroup } from 'tamagui'

import CardTrainer from '@/components/core/CardTrainer/CardTrainer'
import DetailListSales from '@/components/core/DetailList/DetailListSales'
import { ListProject } from '@/components/core/ListItem/ListItemOptions'
import { SearchItem } from '@/components/core/SearchItem'
import { DetailSalesHeader } from '@/components/layout/DetailSalesHeader'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'
export default function DetailSalesProjects() {
    const [filteredProjects, setFilteredProjects] = useState(ListProject)
    return (
        <ScreenTemplate
            options={{
                title: 'project',
                header: () => <DetailSalesHeader />,
            }}>
            <Stack.Screen />
            <ScrollView width="100%">
                <YStack>
                    <YGroup gap={20} pt={16} p={16}>
                        {filteredProjects.map((item, index) => (
                            <YGroup.Item key={index}>
                                <TouchableOpacity onPress={() => router.push(item.link as never)}>
                                    <CardTrainer name={item.name} />
                                </TouchableOpacity>
                            </YGroup.Item>
                        ))}
                    </YGroup>
                </YStack>
            </ScrollView>
        </ScreenTemplate>
    )
}
