export type StepsFlowTemplateProps = {
    title: string
    children: React.ReactNode
    currentStep: number
}

export type StepsFlowTemplateStepProps = {
    description: string
    index: number
    children: React.ReactNode
    button?: string
    onNext?: () => void
    onPrevious?: () => void
}
