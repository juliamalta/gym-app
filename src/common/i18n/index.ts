import dayjs from 'dayjs'
import i18n from 'i18next'
import numeral from 'numeral'
import { initReactI18next } from 'react-i18next'

import { Utils } from '@/common/utils'

import enUSResource from './en-US'

export const defaultNS = ['common']
export const resources = {
    enUS: { ...enUSResource },
} as const

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    fallbackLng: 'enUS',
    lng: 'enUS',
    resources,
    ns: Object.keys(enUSResource),
    defaultNS,
    interpolation: {
        escapeValue: false,
        format(value, format) {
            if (value instanceof Date) return value ? dayjs(value).format(format) : 'Invalid Date'
            if (typeof value === `number`) return numeral(value).format(format)
            if (typeof value === `string` && format === 'phone') return Utils.string.formatPhoneNumber(value)
            return value
        },
    },
})

i18n.on('languageChanged', (lng) => {
    dayjs.locale(lng)
    numeral.locale(lng)
})

export default i18n
