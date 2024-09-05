import { Stack } from 'expo-router'
import { YStack } from 'tamagui'
import { ScrollView } from 'tamagui'

import { HeaderBar } from '@/components/layout/HeaderBar'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'
import { SalesOrdersPage } from '@/containers/pages/salesOrdersPage'
export default function SalesOrders() {
    const title = 'My Training'

    return (
        <ScreenTemplate
            options={{
                title: 'salesOrders',
                header: () => <HeaderBar title={title} />,
            }}>
            <ScrollView maxHeight="100%" width="100%" backgroundColor="#FFFFFF">
                <YStack height="100%" gap="$3" mb="$4" padding="$3" backgroundColor="#FFFFFF">
                    <SalesOrdersPage />
                </YStack>
            </ScrollView>
        </ScreenTemplate>
    )
}
