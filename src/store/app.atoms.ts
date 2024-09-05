import { atom } from 'jotai'

/**
 * Base atoms
 */
const isAppReady = atom<boolean>(false)
const isNetConnected = atom<boolean>(true)
const selectedOrg = atom<string>('Organization 1')

export const appStore = {
    isAppReady,
    isNetConnected,
    selectedOrg,
}
