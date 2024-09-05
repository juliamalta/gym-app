import * as Notifications from 'expo-notifications'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { Alert, View } from 'react-native'

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
})

export default function TokenNotification() {
    const handleCallNotifications = async () => {
        const { status } = await Notifications.getPermissionsAsync()

        if (status !== 'granted') {
            Alert.alert('Você não deixou as notificações ativas')
            return
        }

        /* Local
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hello, Word",
        body: "Notificação da onebicode",
      },
      trigger: { seconds: 2 },
    });
    */
    }
    // Obter o Expo Push Token quando o componente é montado
    useEffect(() => {
        const getToken = async () => {
            const token = await Notifications.getExpoPushTokenAsync()
            console.log(token)
        }

        getToken() // Chame a função para obter o token
    }, []) // A matriz de dependência vazia garante que ele seja executado apenas uma vez quando montado

    return (
        <View>
            <StatusBar style="auto" />
        </View>
    )
}
