import { XStack, YStack } from 'tamagui'

export type TabHeaderProps = {
    tabIndex: number
    icon?: React.ReactNode
} & React.ComponentPropsWithRef<typeof XStack> &
    React.PropsWithChildren

export interface TabWidthAndX {
    tabIndex: number
    width: number
    x: number
}

export type TabListProps = {
    isTab?: boolean
    indicatorProp?: React.ComponentPropsWithRef<typeof XStack>
} & React.ComponentPropsWithRef<typeof XStack> &
    React.PropsWithChildren

export type TabViewProps = React.ComponentPropsWithRef<typeof YStack> & React.PropsWithChildren

export type TabContentProps = { tabIndex: number } & React.ComponentPropsWithRef<typeof YStack> &
    React.PropsWithChildren

export type TabsProps = React.ComponentPropsWithRef<typeof YStack> & React.PropsWithChildren
