/**
 * Regular expression pattern for validating email addresses.
 */
const emailRegex = '^[+_.0-9a-zA-Z-]+@([0-9a-z][0-9a-z-]+)+((.)[a-z]{2,})+$'

/**
 * Regular expression pattern for validating passwords.
 * The password must contain at least one uppercase letter, one lowercase letter, one digit, one special character,
 * and be at least 8 characters long.
 */
const passwordRegex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\\w\\s]).{8,}$'

/**
 * Regular expression pattern for validating URLs.
 */
const urlRegex = "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$"

export const validationUtils = {
    emailRegex,
    passwordRegex,
    urlRegex,
}
