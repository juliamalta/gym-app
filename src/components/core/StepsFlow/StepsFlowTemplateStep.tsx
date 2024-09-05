import { Text, YStack } from 'tamagui'

import { StepsFlowTemplateStepProps } from '@/components/core/StepsFlow/StepsFlowTemplate.types'

function StepsFlowTemplateSteps({ children, description }: StepsFlowTemplateStepProps) {
    return (
        <>
            <YStack ai="center" space="$2">
                <Text color="$gray10Light">{description}</Text>
            </YStack>
            {children}
        </>
    )
}

export default StepsFlowTemplateSteps
