import { PrimitiveAtom, useAtom } from 'jotai'
import { useCallback } from 'react'

import { modalStore } from '@/store/modal.atoms'

function useAtomWithModal(atom: PrimitiveAtom<boolean> = modalStore.openedAtom) {
    const [isOpened, setOpened] = useAtom(atom)

    const toggle = useCallback(() => {
        setOpened((old) => !old)
    }, [setOpened])

    const close = useCallback(() => {
        setOpened(false)
    }, [setOpened])

    const open = useCallback(() => {
        setOpened(true)
    }, [setOpened])

    return { isOpened, toggle, close, open }
}

export default useAtomWithModal
