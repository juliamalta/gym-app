import { StatusBar } from 'react-native'
import { YStack } from 'tamagui'

import { auth } from '../../firebaseConfig' // Importar o Firebase aqui
import { SignInErrorModal } from './_components/sign-in-error-modal'
import { SignInForm } from './_components/sign-in-form'
import { SignInHeader } from './_components/sign-in-header'

export default function SignInPage() {
    // Opcional: Verifique se o Firebase foi inicializado corretamente
    console.log('Firebase Auth Initialized:', auth)

    return (
        <YStack fullscreen px="$xl" gap="$xl3">
            <StatusBar />
            <SignInHeader />
            <SignInForm />
            <SignInErrorModal />
        </YStack>
    )
}
