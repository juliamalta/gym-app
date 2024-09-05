/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useCallback } from 'react'

type DebouncedFunction = (...args: any) => void

const useDebouncedFunction = (func: DebouncedFunction, delay: number): ((...args: any) => void) => {
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)

    const debouncedFunction = useCallback(
        (...args: any) => {
            if (timer !== null) {
                clearTimeout(timer)
            }
            const newTimer = setTimeout(() => {
                func(...args)
            }, delay)
            setTimer(newTimer)
        },
        [func, delay, timer]
    )

    useEffect(() => {
        return () => {
            if (timer !== null) {
                clearTimeout(timer)
            }
        }
    }, [timer])

    return debouncedFunction
}

export default useDebouncedFunction
