/**
 * Checks if a value is greater than zero.
 * @param value - The value to check.
 * @returns `true` if the value is greater than zero, `false` otherwise.
 */
function isGreaterThanZero(value: string | number) {
    const num = Number(value)
    if (num <= 0) {
        return false
    } else {
        return true
    }
}

/**
 * Checks if the given value is less than zero.
 *
 * @param value - The value to be checked.
 * @returns `true` if the value is less than zero, `false` otherwise.
 */
function isLessThanZero(value: string | number) {
    const num = Number(value)
    if (num < 0) {
        return true
    } else {
        return false
    }
}

/**
 * Checks if a number is between a minimum and maximum value (inclusive).
 *
 * @param value - The number to check.
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns `true` if the number is between the minimum and maximum values, `false` otherwise.
 */
function isBetween(value: number, min: number, max: number) {
    if (value >= min && value <= max) {
        return true
    } else {
        return false
    }
}

/**
 * Checks if a number is even.
 * @param value - The number to check.
 * @returns True if the number is even, false otherwise.
 */
function isEven(value: number) {
    if (value % 2 === 0) {
        return true
    } else {
        return false
    }
}

/**
 * Checks if a number is odd.
 * @param value - The number to check.
 * @returns True if the number is odd, false otherwise.
 */
function isOdd(value: number) {
    if (value % 2 !== 0) {
        return true
    } else {
        return false
    }
}

export const numberUtils = { isGreaterThanZero, isLessThanZero, isBetween, isEven, isOdd }
