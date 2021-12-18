import React, { createContext, useState } from 'react'

const initialState = {
    text: 'Context testing',
    number: 12345,
}

export const AppContext = createContext({})

const Store = (props) => {
    const [stateContext, setStateContext] = useState(initialState)

    const updateState = (key, value) => {
        setStateContext({
            ...stateContext,
            [key]: value
        })
    }
    
    return (
        <AppContext.Provider value={{
            text: stateContext.text,
            number: stateContext.number,
            setText: textString => updateState("text", textString),
            setNumber: number => updateState("number", number),
        }}>
            {props.children}       
        </AppContext.Provider>
    )
}

export default Store