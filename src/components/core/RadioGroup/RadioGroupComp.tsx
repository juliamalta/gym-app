import { Feather } from '@expo/vector-icons'
import { Checkbox, XStack } from 'tamagui'

import { RadioGroupCompProps } from '@/components/core/RadioGroup/RadioGroupComp.types'

export default function RadioGroupComp({ children, value, checked }: RadioGroupCompProps) {
    return (
        <XStack width="100%" alignItems="center" space="$4">
            <Checkbox size="$3" value={value} checked={checked}>
                <Checkbox.Indicator>
                    <Feather name="check" />
                </Checkbox.Indicator>
            </Checkbox>
            {children}
        </XStack>
    )
}
