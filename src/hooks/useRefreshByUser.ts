import { useState } from 'react'

export function useRefreshByUser(refetch?: () => Promise<unknown>) {
    const [isRefetchingByUser, setIsRefetchingByUser] = useState(false)

    async function refetchByUser() {
        setIsRefetchingByUser(true)

        try {
            refetch && (await refetch())
        } finally {
            setIsRefetchingByUser(false)
        }
    }

    return {
        isRefetchingByUser,
        refetchByUser,
    }
}
