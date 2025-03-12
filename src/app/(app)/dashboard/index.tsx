import { Entypo } from '@expo/vector-icons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Stack } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { ScrollView, YStack, Text, XStack, View, YGroup, Separator } from 'tamagui'

import CardsPrimary from '@/components/core/CardPrimary/CardPrimary'
import CardsSecondary from '@/components/core/CardSecondary/CardSecondary'
import { ListUser } from '@/components/core/ListUser'
import { ListUserController } from '@/components/core/ListUserController'
import { ListController } from '@/components/core/ListUserController/ListUserControllerOptions'
import { HeaderBar } from '@/components/layout/HeaderBar'
import { HeaderSignOut } from '@/components/layout/HeaderSignOut'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'
export default function Dashboard() {
    return (
        <ScreenTemplate
            options={{
                title: 'More',
                header: () => <HeaderBar title={'More'} />,
            }}>
            <Stack.Screen />
            <ScrollView maxHeight="100%" width="100%" bg="#0a0a0a">
                <YStack height="100%" gap="$3" mb="$4" padding="$3" bg="#0a0a0a">
                    <CardsPrimary
                        name="Treinos Concluidos"
                        icon={<MaterialIcons name="sports-gymnastics" size={36} color="white" />}
                    />
                    <CardsSecondary name="Nome do Usuario" />
                    <CardsSecondary name="Nome do Usuario" />
                </YStack>
            </ScrollView>
        </ScreenTemplate>
    )
}
