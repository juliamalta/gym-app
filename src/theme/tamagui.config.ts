import { createAnimations } from '@tamagui/animations-react-native'
import { shorthands } from '@tamagui/shorthands'
import { themes } from '@tamagui/themes'
import { createTamagui } from 'tamagui'

import { interHeaderFont, interBodyFont } from './font.config'
import { customToken } from './tokens.config'

const animations = createAnimations({
    bouncy: {
        type: 'spring',
        damping: 10,
        mass: 0.9,
        stiffness: 100,
    },
    lazy: {
        type: 'spring',
        damping: 20,
        stiffness: 60,
    },
    quick: {
        type: 'spring',
        damping: 100,
        mass: 1.2,
        stiffness: 250,
    },
    '100ms': {
        type: 'timing',
        duration: 100,
    },
})

const config = createTamagui({
    animations,
    defaultTheme: 'light',
    shouldAddPrefersColorThemes: false,
    themeClassNameOnRoot: false,
    shorthands,
    fonts: {
        heading: interHeaderFont,
        body: interBodyFont,
    },
    defaultFont: '$body',
    themes,
    tokens: customToken,
})

export type AppConfig = typeof config

declare module 'tamagui' {
    interface TamaguiCustomConfig extends AppConfig {}
}

export default config
