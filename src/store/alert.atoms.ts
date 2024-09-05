import { atom } from 'jotai'

/**
 * Base atoms
 */
const openedAtom = atom<boolean>(false)

export const alertStore = {
    openedAtom,
}
