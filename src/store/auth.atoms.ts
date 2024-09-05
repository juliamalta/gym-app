import { atom } from 'jotai'

import { IAuthViewer } from '@/common/types'

/**
 * Base atoms
 */
const authViewerAtom = atom<IAuthViewer | null>(null)
const authErrorModalOpenedAtom = atom<boolean>(false)

/**
 * Derived atoms
 */
const isAuthenticatedAtom = atom((get) => !!get(authViewerAtom))

export const authStore = {
    authViewerAtom,
    isAuthenticatedAtom,
    authErrorModalOpenedAtom,
}
