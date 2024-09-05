import { router, useRootNavigation, useSegments } from 'expo-router'
import { useEffect } from 'react'

import { appPath, authPath } from '@/common/configs/paths.config'
import { useAuth } from '@/hooks/useAuth'

const AUTH_GROUP = '(auth)'

export function useProtectedRoute() {
    const segments = useSegments()
    const rootNavigation = useRootNavigation()

    const isAuthenticated = false

    useEffect(() => {
        if (!rootNavigation?.isReady()) {
            return
        }

        const inAuthGroup = segments[0] === AUTH_GROUP
        if (
            // If the user is not signed in and the initial segment is not anything in the auth group.
            !isAuthenticated &&
            !inAuthGroup
        ) {
            // Redirect to the sign-in page.
            router.replace(authPath.signIn)
        } else if (isAuthenticated && inAuthGroup) {
            // Redirect away from the sign-in page.
            router.replace(appPath.root)
        }
    }, [isAuthenticated, rootNavigation, segments])
}
