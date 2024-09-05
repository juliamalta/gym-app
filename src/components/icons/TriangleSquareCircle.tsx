import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'

import { IconProp } from '@/components/icons/icon.types'

const TriangleSquareCircle = ({ size = 24, color = 'black', ...props }: IconProp) => (
    <Svg width={size} height={size} fill="none" {...props}>
        <Path
            fill={color}
            d="M11.5 2 6 11h11l-5.5-9Zm0 3.84L13.43 9H9.56l1.94-3.16ZM17 13c-2.49 0-4.5 2.01-4.5 4.5S14.51 22 17 22s4.5-2.01 4.5-4.5S19.49 13 17 13Zm0 7a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5ZM2.5 21.5h8v-8h-8v8Zm2-6h4v4h-4v-4Z"
        />
    </Svg>
)
export default memo(TriangleSquareCircle)
