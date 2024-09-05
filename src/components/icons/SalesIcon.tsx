import * as React from 'react'
import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'

import { IconProp } from '@/components/icons/icon.types'
const SalesIcon = ({ size = 24, color, ...props }: IconProp) => (
    <Svg width={25} height={size} fill="none" {...props}>
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.5 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16.5 8h-6a2 2 0 1 0 0 4h4a2 2 0 0 1 0 4h-6m4 1V7"
        />
    </Svg>
)
export default memo(SalesIcon)
