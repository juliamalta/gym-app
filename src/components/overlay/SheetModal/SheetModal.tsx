import { Sheet } from '@tamagui/sheet'
import { useState } from 'react'

import useAtomWithModal from '@/hooks/useAtomWithModal'

import { SheetModalProps } from './SheetModal.types'

export default function SheetModal({
    children,
    initialPosition,
    atom,
    modal,
    fit,
    overlay = true,
    handle = true,
}: SheetModalProps) {
    const { isOpened, close } = useAtomWithModal(atom)
    const [position, setPosition] = useState(0)

    return (
        <Sheet
            dismissOnOverlayPress
            forceRemoveScrollEnabled={isOpened}
            modal={modal}
            open={isOpened}
            onOpenChange={() => close()}
            snapPoints={fit ? undefined : [initialPosition ? initialPosition : 80]}
            snapPointsMode={fit ? 'fit' : 'percent'}
            dismissOnSnapToBottom
            position={position}
            onPositionChange={setPosition}
            zIndex={100_000}
            animation="quick">
            {overlay && <Sheet.Overlay />}
            {handle && <Sheet.Handle />}

            <Sheet.Frame flex={1} backgroundColor="white">
                {children}
            </Sheet.Frame>
        </Sheet>
    )
}
