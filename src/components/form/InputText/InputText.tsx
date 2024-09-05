import React from 'react'
import { useController } from 'react-hook-form'
import { Circle, Input, XStack, YStack, getTokens } from 'tamagui'

import InputError from '@/components/form/InputBase/InputError'
import InputLabel from '@/components/form/InputBase/InputLabel'

import { InputTextProps } from './InputText.types'

export default function InputText({
    name,
    label,
    defaultValue,
    placeholder,
    textContentType,
    disabled,
    icon,
    control,
    rules,
    size = 'lg',
}: InputTextProps) {
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
        <YStack gap={'$xs'}>
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
                    size="$4"
                    padding="$2"
                    width="100%"
                    placeholder={placeholder}
                    textContentType={textContentType}
                    disabled={disabled}
                    {...field}
                    onChangeText={(event) => {
                        field.onChange(event)
                    }}
                />
                {icon && (
                    <Circle size="$2.5" position="absolute" backgroundColor="$blue6Light" right="$2.5">
                        {icon}
                    </Circle>
                )}
            </XStack>
            {error && <InputError error={error.message || ''} />}
        </YStack>
    )
}
