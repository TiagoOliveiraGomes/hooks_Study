import React from 'react'
import './index.css'

const SessionTittle = props => {
    const {tittle} = props
    return (
        <div className='SessionTittle'>
            <h2>{tittle}</h2>
            <div className='line' />
        </div>
    )
}

export default SessionTittle