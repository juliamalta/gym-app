import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import React from 'react'

export type ScreenTemplateProps = {
    fullscreen?: boolean
    options?: NativeStackNavigationOptions
} & React.PropsWithChildren
