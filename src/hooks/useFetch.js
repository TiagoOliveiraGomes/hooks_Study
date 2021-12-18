import { useEffect } from "react"
import { useState } from "react/cjs/react.development"

export const useFetch = (url, method = "get") => {
    const [response, setResponse] = useState({
        data: null,
        loading: true
    })

    useEffect(()=>{
        let isMounted = true
        const methodFunctionAsync = async () => {
            const response = await fetch(url, {method})
            const responseJSON = await response.json()
            isMounted && setResponse({
                data: responseJSON, 
                loading: false
            })
        }
        methodFunctionAsync()
        return () => isMounted = false
    }, [url, method])

    return response
}