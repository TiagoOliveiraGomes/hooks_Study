import React, { useContext } from 'react'
import './index.css'
import PageTittle from '../../components/layouts/pageTittle'
import { DataContext } from '../../data/dataContext'
import SessionTittle from '../../components/layouts/sessionTittle'
import { AppContext } from '../../data/store'

const UseContext = ()=> {
    const context = useContext(DataContext)
    const {number, setNumber, text} = useContext(AppContext)
    const calculateFunction = (delta) => {
        context.setStateContext({
            ...context.stateContext,
            years_old: context.stateContext.years_old + delta
        })
        console.log(context)
    }
    return (
        <div className='UseContext'>
            <PageTittle tittle='UseContext' content='Accepts a context object and returns the current value of the context' />
            <SessionTittle tittle='Exercício #01' />
            <div className="center">
                <span className="text">{context.stateContext.name}</span>
                <span className="text">{context.stateContext.years_old}</span>
                <div>
                    <button className="btn" onClick={()=>calculateFunction(-1)}>-1</button>
                    <button className="btn" onClick={()=>calculateFunction(+1)}>+1</button>
                </div>
            </div>
            <SessionTittle tittle='Exercício #02' />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(number - 1)}>-1</button>
                    <button className="btn" onClick={() => setNumber(number + 1)}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext