import { useEffect, useState } from 'react'
import { Keyboard } from 'react-native'

export const useKeyboardOpened = () => {
    const [isKeyboardOpened, setIsKeyboardOpen] = useState(false)

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setIsKeyboardOpen(true)
        })

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setIsKeyboardOpen(false)
        })

        return () => {
            keyboardDidShowListener.remove()
            keyboardDidHideListener.remove()
        }
    }, [])

    return { isKeyboardOpened }
}
