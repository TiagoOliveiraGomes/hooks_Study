import React from 'react'
import PageTittle from '../../components/layouts/pageTittle'
import "./index.css"

const notFound = props => {
    return(
        <div className="NotFound">
            <PageTittle tittle={"Error 404"} content={"Ops... Page not found!"} isWarning/>
        </div>
    )
}

export default notFound