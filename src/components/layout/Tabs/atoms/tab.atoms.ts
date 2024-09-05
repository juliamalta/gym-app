import { atomWithReset } from 'jotai/utils'

import { TabWidthAndX } from '@/components/layout/Tabs/Tab.types'

const tabWidthAndX = atomWithReset<TabWidthAndX[] | []>([])
const tabIndex = atomWithReset<number>(0)
const prevIndex = atomWithReset<number>(1)

export const TabStore = {
    tabWidthAndX,
    tabIndex,
    prevIndex,
}
