import { useAtom } from 'jotai'
import { useCallback } from 'react'

import { TabStore } from '@/components/layout/Tabs/atoms/tab.atoms'

export default function useTabStore() {
    const [tabWidthAndX, setTabWidthAndX] = useAtom(TabStore.tabWidthAndX)
    const [tabIndex, setTabIndex] = useAtom(TabStore.tabIndex)
    const [prevIndex, setPrevIndex] = useAtom(TabStore.prevIndex)

    const resetTabState = useCallback(() => {
        setTabWidthAndX([])
        setTabIndex(0)
        setPrevIndex(1)
    }, [setTabWidthAndX, setTabIndex, setPrevIndex])

    return {
        tabWidthAndX,
        setTabWidthAndX,
        tabIndex,
        setTabIndex,
        prevIndex,
        setPrevIndex,
        resetTabState,
    }
}
