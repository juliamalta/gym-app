import { PropsWithChildren } from 'react'
import { ButtonProps } from 'tamagui'

export type LoadingButtonProps = {
    loading?: boolean
} & ButtonProps &
    PropsWithChildren
