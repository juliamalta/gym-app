import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import { useController } from 'react-hook-form'
import { Circle, Input, XStack, YStack, getTokens } from 'tamagui'

import InputError from '@/components/form/InputBase/InputError'
import InputLabel from '@/components/form/InputBase/InputLabel'

import { InputPasswordProps } from './InputPassword.types'

export default function InputPassword({
    name,
    label,
    defaultValue,
    placeholder,
    disabled,
    control,
    rules,
    size = 'lg',
}: InputPasswordProps) {
    const [secureText, setSecureText] = useState(true)

    const {
        field,
        fieldState: { error, invalid },
    } = useController({
        name,
        control,
        defaultValue,
        rules,
    })

    return (
        <YStack gap="$xs">
            {label && <InputLabel text={label} />}
            <XStack
                ai="center"
                width="100%"
                borderWidth={1}
                height={getTokens().size[size].val as number}
                backgroundColor={invalid ? '$red2' : '$blue2Light'}
                borderColor={invalid ? '$red7' : '$secondary'}
                focusStyle={
                    invalid
                        ? { borderColor: '$red8' }
                        : {
                              borderColor: '$secondary',
                          }
                }
                borderRadius={5}>
                <Input
                    unstyled
                    secureTextEntry={secureText}
                    size="$4"
                    padding="$2"
                    width="100%"
                    placeholder={placeholder}
                    textContentType="password"
                    disabled={disabled}
                    {...field}
                    onChangeText={(event) => {
                        field.onChange(event)
                    }}
                />
                <Circle size="$2.5" position="absolute" right="$2.5" onPress={() => setSecureText(!secureText)}>
                    <Feather size={16} name={secureText ? 'eye' : 'eye-off'} />
                </Circle>
            </XStack>
            {error && <InputError error={error.message || ''} />}
        </YStack>
    )
}
