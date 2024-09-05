import { TamaguiProvider, Theme } from 'tamagui'

import config from '../../../theme/tamagui.config'
import { ThemeProviderProps } from './ThemeProvider.types'

function ThemeProvider({ children }: ThemeProviderProps) {
    return (
        <TamaguiProvider config={config}>
            <Theme name="light">{children}</Theme>
        </TamaguiProvider>
    )
}

export default ThemeProvider
