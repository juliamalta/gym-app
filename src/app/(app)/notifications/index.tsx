/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Notifications from 'expo-notifications'
import { useState, useEffect, Key } from 'react'
import { YStack, Text } from 'tamagui'

import { ListItemNotification } from '@/components/core/ListItemNotification'
import { RefreshComp } from '@/components/core/RefreshComp'
import { HeaderNotifications } from '@/components/layout/HeaderNotifications'
import { Tabs } from '@/components/layout/Tabs'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'

import TokenNotification from './token'

export default function NotificationsPage() {
    const [receivedNotifications, setReceivedNotifications] = useState<any>([])

    const handleNotificationReceived = (notification: any) => {
        setReceivedNotifications((prevNotifications: any) => [notification, ...prevNotifications])
    }

    useEffect(() => {
        const notificationListener = Notifications.addNotificationReceivedListener(handleNotificationReceived)

        return () => {
            notificationListener.remove() // Remove o listener ao desmontar o componente
        }
    }, [])

    return (
        <ScreenTemplate
            options={{
                title: 'Notifications',
                header: () => <HeaderNotifications title={'Notifications'} />,
            }}>
            <TokenNotification />

            <Tabs f={1}>
                <Tabs.List>
                    <Tabs.Header tabIndex={0}>Notifications</Tabs.Header>
                    <Tabs.Header tabIndex={1}>Approvals</Tabs.Header>
                </Tabs.List>
                <Tabs.View>
                    <Tabs.Content tabIndex={0}>
                        <YStack>
                            <RefreshComp />
                        </YStack>
                    </Tabs.Content>
                    <Tabs.Content tabIndex={1}>
                        <ListItemNotification
                            title="Requested approval for a 10% discount from estimate EST-1111"
                            text="Renato Silva - 08/30/2023 04:31 PM"
                            customer="Customer: José Trindade"
                            project="Project: La Casa de Papel"
                        />
                    </Tabs.Content>
                </Tabs.View>
            </Tabs>
        </ScreenTemplate>
    )
}
//obs : adicionar project ID no expo Go para funcionar as notificações
