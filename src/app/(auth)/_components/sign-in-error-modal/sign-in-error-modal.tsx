import { useTranslation } from 'react-i18next'

import { ConfirmDialog } from '@/components/feedback'
import { useAtomWithDisclosure } from '@/hooks/states/useAtomWithDisclosure'
import { authStore } from '@/store/auth.atoms'

function SignInErrorModal() {
    const { t } = useTranslation('auth')
    const [opened, { close: closeAlert }] = useAtomWithDisclosure(authStore.authErrorModalOpenedAtom)

    return (
        <ConfirmDialog
            opened={opened}
            title={t('exceptions.invalidCredentials')}
            description={t('exceptions.verifyEmailCorrectly')}
            onClose={() => closeAlert()}
        />
    )
}

export default SignInErrorModal
