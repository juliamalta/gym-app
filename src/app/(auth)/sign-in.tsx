import { YStack } from 'tamagui'

import { SignInErrorModal } from '@/app/(auth)/_components/sign-in-error-modal'
import { SignInForm } from '@/app/(auth)/_components/sign-in-form'
import { SignInHeader } from '@/app/(auth)/_components/sign-in-header'
import { ScreenTemplate } from '@/components/template/ScreenTemplate'

export default function SignInPage() {
    return (
        <>
            <ScreenTemplate>
                <YStack fullscreen px="$xl" gap="$xl3" bg="#0a0a0a">
                    <SignInHeader />
                    <SignInForm />
                    <SignInErrorModal />
                </YStack>
            </ScreenTemplate>
        </>
    )
}
