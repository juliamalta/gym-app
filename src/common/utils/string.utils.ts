/**
 * Capitalizes the first letter of a string.
 * If the input string is empty, it returns the input string unchanged.
 *
 * @param input - The string to capitalize.
 * @returns The capitalized string.
 */
function capitalizeFirstLetter(input: string): string {
    if (input.length === 0) {
        return input // Return the input string unchanged if it's an empty string
    }

    return input.charAt(0).toUpperCase() + input.slice(1)
}

/**
 * Converts a string to a slug format.
 *
 * @param value - The string to slugify.
 * @returns The slugified string.
 */
function slugify(value: string) {
    return value
        .toLowerCase()
        .trim()
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
}

/**
 * Breaks long strings into multiple lines based on a maximum width.
 *
 * @param paragraph - The string to break into lines.
 * @param maxWidth - The maximum width of each line.
 * @returns An array of lines.
 */
function breakLongStrings(paragraph: string, maxWidth: number): string[] {
    const words = paragraph.split(' ')
    const lines: string[] = []

    let currentLine = ''

    for (let word of words) {
        while (word.length > maxWidth) {
            lines.push(word.substring(0, maxWidth))
            word = word.substring(maxWidth)
        }

        const wordWithSpace = currentLine === '' ? word : ` ${word}`

        if (currentLine.length + wordWithSpace.length <= maxWidth || currentLine === '') {
            currentLine += wordWithSpace
        } else {
            lines.push(currentLine)
            currentLine = word
        }
    }

    if (currentLine !== '') {
        lines.push(currentLine)
    }

    return lines
}

/**
 * Converts a slug string to a human-readable format.
 *
 * @param value - The slug string to unslugify.
 * @returns The unslugified string.
 */
function unslugify(value: string) {
    const wordsArray = value.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    return wordsArray.join(' ')
}

/**
 * Formats a phone number string into a specific format.
 *
 * @param phoneNumberString - The phone number string to format.
 * @returns The formatted phone number string in the format "(XX) XXXX-XXXX", or null if the input is invalid.
 */
function formatPhoneNumber(phoneNumberString: string): string | null {
    const cleaned = `${phoneNumberString}`.replace(/\D/g, '')
    const match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/)
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`
    }
    return null
}

/**
 * Truncates a string to a specified length and appends an ellipsis if necessary.
 *
 * @param input - The string to truncate.
 * @param maxLength - The maximum length of the truncated string.
 * @returns The truncated string.
 */
function truncateString(input: string, maxLength: number): string {
    if (input.length <= maxLength) {
        return input
    }
    return input.slice(0, maxLength) + '...'
}

/**
 * Removes all whitespace characters from a string.
 *
 * @param input - The string to remove whitespace from.
 * @returns The string without whitespace.
 */
function removeWhitespace(input: string): string {
    return input.replace(/\s/g, '')
}

/**
 * Converts a string to camel case.
 *
 * @param input - The string to convert.
 * @returns The camel cased string.
 */
function toCamelCase(input: string): string {
    return input.replace(/-_/g, (_, char) => char.toUpperCase())
}

/**
 * Converts a string to kebab case.
 *
 * @param input - The string to convert.
 * @returns The kebab cased string.
 */
function toKebabCase(input: string): string {
    return input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * Converts a string to kebab case.
 *
 * @param input - The kebab cased string.
 * @returns  The camel cased string.
 */
function fromKebabToCamelCase(input: string): string {
    return input.replace(/-([a-z])/g, (_, char) => char.toUpperCase())
}

/**
 * Removes all non-alphanumeric characters from a string.
 *
 * @param input - The string to remove non-alphanumeric characters from.
 * @returns The string without non-alphanumeric characters.
 */
function removeNonAlphanumeric(input: string): string {
    return input.replace(/[^a-zA-Z0-9]/g, '')
}

export const stringUtils = {
    capitalizeFirstLetter,
    slugify,
    breakLongStrings,
    unslugify,
    formatPhoneNumber,
    truncateString,
    removeWhitespace,
    toCamelCase,
    toKebabCase,
    fromKebabToCamelCase,
    removeNonAlphanumeric,
}
