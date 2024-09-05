import { Stack } from 'expo-router'
import { ScrollView, YGroup, YStack, Separator } from 'tamagui'

import { DetailList } from '@/components/core/DetailList'
import { DetailProjectsHeader } from '@/components/layout/DetailProjectsHeader'
import { HeaderBar } from '@/components/layout/HeaderBar'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'

export default function DetailProjects() {
    return (
        <ScreenTemplate
            options={{
                title: 'project',
                header: () => <DetailProjectsHeader />,
            }}>
            <Stack.Screen />
            <ScrollView width="100%">
                <YStack>
                    <DetailList
                        status="pending approval"
                        projectName="Condominio Raposa do sol"
                        projectOwner="Renato Silva"
                        referral="Maria Arquiteta"
                        desc="Cozinha Móveis Planejados Todeschini"
                        markupValue="158%"
                        valueNet={1800}
                        porcentagem="61,17%"
                        subtotal={3100}
                        valueTax={210}
                        valueDelivery={310}
                        valueTotal={3620}
                    />
                </YStack>
            </ScrollView>
        </ScreenTemplate>
    )
}
