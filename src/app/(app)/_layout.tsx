import { Stack } from 'expo-router'

import { NavigationBar } from '@/components/layout/NavigationBar'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'

export default function AppLayout() {
    useProtectedRoute()

    return (
        <>
            <Stack
                screenOptions={{
                    animation: 'ios',
                }}></Stack>
            <NavigationBar />
        </>
    )
}
