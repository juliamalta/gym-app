import { router, useRootNavigation, useSegments } from 'expo-router'
import { useEffect } from 'react'

import { appPath, authPath } from '@/common/configs/paths.config'
import { useAuth } from '@/hooks/useAuth'
const AUTH_GROUP = '(auth)'

export function useProtectedRoute() {
    const segments = useSegments()
    const rootNavigation = useRootNavigation()

    const { isAuthenticated } = useAuth()

    useEffect(() => {
        // Only run this effect when navigation is ready
        if (!rootNavigation?.isReady()) {
            return
        }

        const inAuthGroup = segments[0] === AUTH_GROUP

        // Add a small delay to ensure state is fully updated
        const redirectTimeout = setTimeout(() => {
            if (!isAuthenticated && !inAuthGroup) {
                // Redirect to the sign-in page
                router.replace(authPath.signIn)
            } else if (isAuthenticated && inAuthGroup) {
                // Redirect away from the sign-in page
                router.replace(appPath.root)
            }
        }, 100)

        return () => clearTimeout(redirectTimeout)
    }, [isAuthenticated, rootNavigation, segments])
}
