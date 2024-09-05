/**
 * Suspends the execution of the current function for a specified number of milliseconds.
 * @param ms The number of milliseconds to sleep. Default is 500 milliseconds.
 * @returns A promise that resolves after the specified number of milliseconds.
 */
function sleep(ms = 500) {
    return new Promise((res) => setTimeout(res, ms))
}

export const promiseUtils = { sleep }
