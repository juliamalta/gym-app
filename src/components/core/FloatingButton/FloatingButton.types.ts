import { FunctionComponent } from 'react'

export type FloatingButtonItemProps = {
    text: string
    icon: JSX.Element | FunctionComponent<{ color?: string; size?: number }> | null
    action?: () => void
}

export type FloatingButtonProps = {
    icon?: JSX.Element | FunctionComponent<{ color?: string; size?: number }> | null
    menu: FloatingButtonItemProps[]
}
