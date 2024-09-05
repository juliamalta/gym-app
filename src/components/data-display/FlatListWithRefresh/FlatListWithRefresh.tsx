import React from 'react'
import { FlatList, RefreshControl } from 'react-native'
import { YStack } from 'tamagui'

import { IFlatListWithRefreshProps } from '@/components/data-display/FlatListWithRefresh/FlatListWithRefresh.types'

export default function FlatListWithRefresh({
    children,
    isRefetchingByUser,
    refetchByUser,
}: IFlatListWithRefreshProps) {
    return (
        <FlatList
            data={[{}]}
            style={{ flex: 1, width: '100%', backgroundColor: 'white' }}
            refreshControl={<RefreshControl refreshing={isRefetchingByUser} onRefresh={refetchByUser} />}
            renderItem={() => (
                <YStack height="100%" gap="$3" mb="$4" padding="$3" backgroundColor="white">
                    {children}
                </YStack>
            )}
        />
    )
}
