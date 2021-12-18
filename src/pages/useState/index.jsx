import PageTittle from '../../components/layouts/pageTittle'
import React, { useState } from 'react'
import SessionTittle from '../../components/layouts/sessionTittle'
import './index.css'

const UseState = props => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    const clickCount = (action) => {
        if(action === 'plus') setCount(count + 1)
        if(action === 'minum') setCount(count - 1)
        if(action === '2x') setCount(count + count)
    }

    return(
        <div className='UseState'>
            <PageTittle tittle='UseState' content='State in functional components' isWarning={false} />
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
            <span className="text">{name}</span>
        </div>
        )
}

export default UseState