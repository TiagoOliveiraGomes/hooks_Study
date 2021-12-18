import PageTittle from '../../components/layouts/pageTittle'
import React, { useState, useEffect } from 'react'
import SessionTittle from '../../components/layouts/sessionTittle'
import './index.css'

const UseEffect = props => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    const [spam, setSpam] = useState('')

    const clickCount = (action) => {
        if(action === 'plus') setCount(count + 1)
        if(action === 'minum') setCount(count - 1)
        if(action === '2x') setCount(count + count)
    }

    useEffect(() => {
        count? setSpam('Calculando...'): setSpam('')
    }, [count])
    useEffect(() => {
        name? setSpam('Digitando...'): setSpam('')
    }, [name])

    return(
        <div className='UseEffect'>
            <PageTittle tittle='UseEffect' content='State in functional components' isWarning={false} />
            <SessionTittle tittle='Exercício #01' />
            <div className="center">
                <span className="text">
                    {count}
                </span>
                <div>
                    <button className="btn"
                    onClick={() => clickCount('plus')}>+1</button>
                    <button className="btn"
                    onClick={() => clickCount('minum')}>-1</button>
                    <button className="btn"
                    onClick={() => clickCount('2x')}>Dobrar</button>
                </div>
            </div>
            <SessionTittle tittle='Exercício #02' />
            <input type="text" className="input" value={name} onChange={e=>setName(e.target.value)} />
            <span className="text">{spam}</span>
        </div>
        )
}

export default UseEffect