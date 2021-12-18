import React from 'react'
import './index.css'

const PageTittle = props => {
    const {tittle, content, isWarning} = props
    const classPageTittle = isWarning?"PageTittle_Warning":'PageTittle_Normal'
    return(
        <div className='contain'>
            <div className={classPageTittle}>
                <h2>{tittle}</h2>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default PageTittle