import PageTittle from '../../components/layouts/pageTittle'
import React, { useState, useRef, useEffect } from 'react'
import SessionTittle from '../../components/layouts/sessionTittle'
import './index.css'

const mergeStrings = (topString='', bottomString='') => {
    const arrayTopString = [...topString]
    const arrayBottomString = [...bottomString]
    let mergedString = arrayTopString.map((element, index) => {
        return arrayBottomString[index]? element + arrayBottomString[index]: element
    }).join("")

    console.log("asdasdasdasd", arrayTopString.length)
    return mergedString
}

const UseRef = props => {
    const [name, setName] = useState('')
    const [nameBottom, setNameBottom] = useState('')
    const countRef = useRef(0)
    const nameRef = useRef(null)
    const nameBottomRef = useRef(null)
    
    useEffect(() => {
        countRef.current = countRef.current + 1
        nameBottomRef.current.focus()
    }, [name])

    useEffect(() => {
        countRef.current = countRef.current + 1
        nameRef.current.focus()
    }, [nameBottom])
    
    return(
        <div className='UseRef'>
            <PageTittle tittle='UseRef' content='Returns a mutable object with current property!' isWarning={false} />
            <span className="text center">UseRef: {countRef.current}</span>
            <SessionTittle tittle='Exercício #01' />
            <input ref={nameRef} type="text" className="text" onChange={(e)=>{setName(e.target.value)}}/>
            <SessionTittle tittle='Exercício #02' />
            <input ref={nameBottomRef} type="text" className="text" onChange={(e)=>{setNameBottom(e.target.value)}} />
            <span className="center text">Merge: {mergeStrings(name, nameBottom)}</span>
        </div>
        )
}

export default UseRef