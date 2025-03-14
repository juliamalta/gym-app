import { Stack } from 'expo-router'
import { YStack } from 'tamagui'
import { ScrollView } from 'tamagui'

import { HeaderBar } from '@/components/layout/HeaderBar'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'
import { ProjectPage } from '@/containers/pages/ProjectPage'

export default function Project() {
    const title = 'Exercicios'

    return (
        <ScreenTemplate
            options={{
                title: 'Exercicios',
                header: () => <HeaderBar title={title} />,
            }}>
            <Stack.Screen />
            <ScrollView maxHeight="100%" width="100%" bg="#0a0a0a">
                <YStack height="100%" gap="$3" mb="$4" padding="$3" bg="#0a0a0a">
                    <ProjectPage />
                </YStack>
            </ScrollView>
        </ScreenTemplate>
    )
}
