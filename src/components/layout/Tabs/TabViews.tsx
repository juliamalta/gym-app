import { FlatList } from 'react-native'
import { YStack } from 'tamagui'

import { TabViewProps } from '@/components/layout/Tabs/Tab.types'

export default function TabViews({ children, ...props }: TabViewProps) {
    return (
        <FlatList
            data={[{}]}
            alwaysBounceHorizontal={false}
            alwaysBounceVertical={false}
            overScrollMode="never"
            bounces={false}
            contentContainerStyle={{ justifyContent: 'center', marginHorizontal: 'auto' }}
            showsHorizontalScrollIndicator={false}
            renderItem={() => (
                <YStack p="$base" h="100%" {...props}>
                    {children}
                </YStack>
            )}
        />
    )
}
