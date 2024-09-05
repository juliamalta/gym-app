import { Text } from 'tamagui'

import { InputErrorProps } from './InputBase.types'

function InputError({ error }: InputErrorProps) {
    return (
        <Text color="$red9" mt={'$xxs'} fontSize={12}>
            {error}
        </Text>
    )
}

export default InputError
