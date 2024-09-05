export type ToastProps = {
    icon?: React.JSX.Element
    text: string
    trigger: React.ReactNode
    action: () => void
    cancelAction: () => void
    cancel?: string
    confirm?: string
    title?: string
} & React.PropsWithChildren
