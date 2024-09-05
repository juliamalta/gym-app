import * as React from 'react'
import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'

import { IconProp } from '@/components/icons/icon.types'
const ProjectIcon = ({ size = 24, color, ...props }: IconProp) => (
    <Svg width={25} height={size} fill="none" {...props}>
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m6.9 14.6 1.45-2.9a2 2 0 0 1 1.79-1.1H20.9m0 0a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4.9a2 2 0 0 1-2-2v-13c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9h5.93a2 2 0 0 1 2 2v2Z"
        />
    </Svg>
)
export default memo(ProjectIcon)
