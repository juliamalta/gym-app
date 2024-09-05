import { ViewStyle } from 'react-native'

export type Section = {
    title?: string
    data: { id: number | string; title: string; description: string; to?: string }[]
}

export type SectionListPressableProps = {
    fetchNext?: () => void
    isLoading?: boolean
    gutters?: boolean
    itemStyle?: ViewStyle
    sections: Section[]
}
