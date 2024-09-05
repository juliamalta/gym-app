import React, { Children, Fragment } from 'react'
import { H4, YStack } from 'tamagui'

import Stepper from '@/components/core/Stepper/Stepper'
import { StepsFlowTemplateProps } from '@/components/core/StepsFlow/StepsFlowTemplate.types'
import StepsFlowTemplateSteps from '@/components/core/StepsFlow/StepsFlowTemplateStep'

function StepsFlowTemplate({ children, currentStep, title }: StepsFlowTemplateProps) {
    const stepsArray = Children.toArray(children)
    return (
        <YStack f={1} width="100%" height="100%" ai="center">
            <Stepper steps={children} step={currentStep} />
            <H4 fontWeight="800">{title}</H4>
            {stepsArray.map((child, index) => {
                if (index === currentStep) {
                    return <Fragment key={`steps-flow-${index}`}>{child}</Fragment>
                }
                return null
            })}
        </YStack>
    )
}

StepsFlowTemplate.Steps = StepsFlowTemplateSteps

export default StepsFlowTemplate
