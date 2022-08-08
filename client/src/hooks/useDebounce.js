import {useState, useEffect} from 'react'

function useDebounce(value, delay) {
    const [state, setState] = useState(value)
    useEffect(() => {
        const timerId = setTimeout(() => {
            setState(value)
        }, delay)

        return () => {
            clearTimeout(timerId)
        }
    }, [value, delay])

    return state
}

export default useDebounce

