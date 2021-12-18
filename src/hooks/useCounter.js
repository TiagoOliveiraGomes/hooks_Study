import {useState} from  'react'

export const useCounter = (initialValue = 100) => {
    const [count, setCount] = useState(initialValue)
    function incremental () {
        setCount(count + 1)
    }
    function decremental () {
        setCount(count - 1)
    }
    return [count, incremental, decremental]
}