/* eslint-disable no-console */
import { ApolloProvider } from '@apollo/client'
import * as Font from 'expo-font'
import { Slot, SplashScreen } from 'expo-router'
import { useAtom } from 'jotai'
import { Suspense, useCallback, useEffect } from 'react'
import '@/common/i18n'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { View } from 'tamagui'

import { gqlClient } from '@/common/configs'
import { sleep } from '@/common/utils/core.utils'
import { ThemeProvider } from '@/components/providers'
import { useAppInitialization } from '@/hooks/useAppInitialization'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'
import { appStore } from '@/store/app.atoms'

SplashScreen.preventAutoHideAsync()

export default function App() {
    return (
        <AppRoot>
            <MainScreen />
        </AppRoot>
    )
}

function AppRoot({ children }: { children: React.ReactNode }) {
    const { initializeApp } = useAppInitialization()
    const [isAppReady, setAppIsReady] = useAtom(appStore.isAppReady)

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({
                    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
                    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
                })

                //App initialization with all necessary data
                await initializeApp()

                await sleep(2000)
            } catch (e) {
                console.warn(e)
            } finally {
                // Tell the application to render
                setAppIsReady(true)
            }
        }

        prepare()
    }, [initializeApp, setAppIsReady])

    const onLayoutRootView = useCallback(async () => {
        if (isAppReady) {
            await SplashScreen.hideAsync()
        }
    }, [isAppReady])

    if (!isAppReady) {
        return null
    }

    return (
        <ApolloProvider client={gqlClient}>
            <ThemeProvider>
                <Suspense>
                    <SafeAreaProvider>
                        <View f={1} onLayout={onLayoutRootView}>
                            {isAppReady && children}
                        </View>
                    </SafeAreaProvider>
                </Suspense>
            </ThemeProvider>
        </ApolloProvider>
    )
}

function MainScreen() {
    useProtectedRoute()

    return <Slot />
}
