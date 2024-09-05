import { Button, Spinner } from 'tamagui'

import { LoadingButtonProps } from './LoadingButton.types'

export default function LoadingButton({ loading, children, ...props }: LoadingButtonProps) {
    return (
        <Button {...props} disabled={loading}>
            {loading && <Spinner color="$blue2Dark" />}
            {!loading && children}
        </Button>
    )
}
