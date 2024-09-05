import { ViewStyle } from 'react-native'

export type LinkListItemProps = {
    title: string
    to?: string
    action?: () => void
    children: React.ReactNode
} & ViewStyle
