import Ionicons from '@expo/vector-icons/Ionicons'
import { XStack } from 'tamagui'

import ChatHeader from '@/components/layout/ChatHeader/ChatHeader'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'
export default function Chat() {
    return (
        <ScreenTemplate
            options={{
                title: 'Chat',
                header: () => <ChatHeader title={'Social'} />,
            }}>
            <XStack f={1} ai="flex-end" ml="auto" mb={10}>
                <Ionicons name="add-circle" size={60} color="#3b0764" />
            </XStack>
        </ScreenTemplate>
    )
}
