import { PrimitiveAtom } from 'jotai'

export type SheetModalProps = {
    children: React.ReactNode
    initialPosition?: number
    atom?: PrimitiveAtom<boolean>
    modal?: boolean
    fit?: boolean
    overlay?: boolean
    handle?: boolean
}
