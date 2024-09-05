/**
 * This is used for mock a promise
 */
export function sleep(ms = 500) {
    return new Promise((res) => setTimeout(res, ms))
}

export function formatPrice(price: number) {
    if (typeof price !== 'number') {
        return 'Invalid input'
    }

    const formattedPrice = price.toFixed(2)

    const formattedString = `${formattedPrice.replace('.', ',')} R$/M²`

    return formattedString
}

export function getFirstTwoNames(fullName: string | undefined) {
    if (!fullName) return
    const words = fullName.trim().split(/\s+/)

    return words[0]
}

export function formatArea(area: number) {
    return `${area.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} M²`
}

export function formatTon(area: number) {
    return `${area.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} TON/M²`
}

export function generateRandomKey() {
    const min = 10000000
    const max = 99999999
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

    return randomNumber.toString()
}
