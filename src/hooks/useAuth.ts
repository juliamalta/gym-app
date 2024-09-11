import { onAuthStateChanged } from 'firebase/auth'
import { useAtom, useAtomValue } from 'jotai'
import { useCallback, useEffect, useState } from 'react'

import { gqlClient } from '@/common/configs'
import { ISignInForm } from '@/common/types'
import { useLoginMutation } from '@/data/mutations/login.mutation'
import { ViewerStorage } from '@/data/storage'
import { authStore } from '@/store/auth.atoms'

import { auth } from '../firebaseConfig'
export default function useAuth() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, (user) => {
            console.log('got user :', user)
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        })
        return unSub
    }, [])
    return { user }
}
