import { atomWithReset } from 'jotai/utils'

/**
 * Base atoms
 */
const openedAtom = atomWithReset<boolean>(false)
const orgModalAtom = atomWithReset<boolean>(false)

export const modalStore = {
    openedAtom,
    orgModalAtom,
}
