import NetInfo from '@react-native-community/netinfo'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

import { appStore } from '@/store/app.atoms'

const useNetInfo = () => {
    const [isConnected, setIsConnected] = useAtom(appStore.isNetConnected)

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            setIsConnected(state.isConnected || false)
        })

        return () => {
            unsubscribe()
        }
    }, [setIsConnected])

    return { isConnected }
}

export default useNetInfo
