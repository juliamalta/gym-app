import ChatHeader from '@/components/layout/ChatHeader/ChatHeader'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'
export default function Chat() {
    return (
        <ScreenTemplate
            options={{
                title: 'Chat',
                header: () => <ChatHeader title={'Chat'} />,
            }}></ScreenTemplate>
    )
}
