import { Feather } from '@expo/vector-icons'
import React, { Fragment, Children } from 'react'
import { Circle, Separator, Text, XStack, YStack } from 'tamagui'

import { StepperProps } from '@/components/core/Stepper/Stepper.types'

export default function Stepper({ step, steps }: StepperProps) {
    const stepsArray = Children.toArray(steps) // Convert the steps to an array

    return (
        <YStack ai="center">
            <XStack w="100%" height="$4" ai="center" jc="center">
                {stepsArray.map((_i, index) => (
                    <Fragment key={`stepper-${index}`}>
                        <Circle
                            marginHorizontal="auto"
                            size="$1.5"
                            backgroundColor={step >= index ? '$blue11Light' : '$gray2Light'}>
                            {step <= index ? (
                                <Text color={step >= index ? 'white' : 'black'}>{index + 1}</Text>
                            ) : (
                                <Feather name="check" color={step >= index ? 'white' : ''} />
                            )}
                        </Circle>
                        {index < stepsArray.length - 1 && (
                            <Separator borderColor={step > index ? 'blue' : '$gray5Light'} />
                        )}
                    </Fragment>
                ))}
            </XStack>
        </YStack>
    )
}
