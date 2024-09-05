import Ionicons from '@expo/vector-icons/Ionicons'
import { XStack, Text } from 'tamagui'

import ChatHeader from '@/components/layout/ChatHeader/ChatHeader'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'
export default function newChat() {
    return (
        <ScreenTemplate
            options={{
                title: 'New Social ',
                header: () => <ChatHeader title={'Social'} />,
            }}>
            <XStack f={1}>
                <Text>Page New Chat</Text>
            </XStack>
        </ScreenTemplate>
    )
}
