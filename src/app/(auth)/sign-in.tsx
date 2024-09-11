import { StatusBar } from 'react-native'
import { YStack } from 'tamagui'

import useAuth from '@/hooks/useAuth'

import { auth } from '../../firebaseConfig' // Importar o Firebase aqui
import { SignInErrorModal } from './_components/sign-in-error-modal'
import { SignInForm } from './_components/sign-in-form'
import { SignInHeader } from './_components/sign-in-header'
export default function SignInPage() {
    // Opcional: Verifique se o Firebase foi inicializado corretamente
    console.log('Firebase Auth Initialized:', auth)
    const { user } = useAuth()
    if (user) {
        return (
            <YStack fullscreen px="$xl" gap="$xl3" bg="#0a0a0a">
                <StatusBar />
                <SignInHeader />
                <SignInForm />
                <SignInErrorModal />
            </YStack>
        )
    } else {
        return (
            <YStack fullscreen px="$xl" gap="$xl3" bg="#0a0a0a">
                <StatusBar />
                <SignInHeader />
                <SignInForm />
                <SignInErrorModal />
            </YStack>
        )
    }
}
