import React, { useMemo } from 'react'
import { useState } from 'react/cjs/react.development'
import PageTittle from '../../components/layouts/pageTittle'
import SessionTittle from '../../components/layouts/sessionTittle'
import './index.css'

const SumFunction = (firstValue, SecondValue) => {
    const futureDateToTest = Date.now() + 2000

    while(new Date() < futureDateToTest) {}
    return +(firstValue) + +(SecondValue)
}

const UseMemo = props => {

    const [FirstInput, setFirstInput] = useState(0)
    const [SecondInput, setSecondInput] = useState(0)
    const [ThirdInput, setThirdInput] = useState(0)
    // const [SumOfTheInputs, setSumOfTheInputs] = useState(0)
    
    const handleInputChange = (event, handlerState) => {
        handlerState(event.target.value)
    }

    const SumOfTheInputs = useMemo(() => SumFunction(FirstInput, SecondInput), [FirstInput, SecondInput])

    return (
        <div className='UseMemo'>
            <PageTittle tittle='UseMemo' content='Returns a memoized value' />
            <SessionTittle tittle='Exercício #01' />
            <div>
                <input type="number" className="input center" onChange={(e)=>handleInputChange(e, setFirstInput)} value={FirstInput}/>
                <input type="number" className="input center" onChange={(e)=>handleInputChange(e, setSecondInput)} value={SecondInput}/>
                <input type="number" className="input center" onChange={(e)=>handleInputChange(e, setThirdInput)} value={ThirdInput}/>
                <span className="text center">{SumOfTheInputs}</span>
            </div>
        </div>
    )
}

export default UseMemo
