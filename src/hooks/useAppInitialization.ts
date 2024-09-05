import { useCallback } from 'react'

import { sleep } from '@/common/utils/core.utils'

export function useAppInitialization() {
    const initializeApp = useCallback(async () => {
        await sleep(1000)
    }, [])

    return { initializeApp }
}
