import { memo } from 'react'
import { Text } from 'tamagui'

import { InputLabelProps } from './InputBase.types'

function InputLabel({ text }: InputLabelProps) {
    return (
        <Text fontSize={'$4'} fontWeight="500" lineHeight={24}>
            {text}
        </Text>
    )
}

export default memo(InputLabel)
