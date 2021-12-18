import React from 'react'
import PageTittle from '../../components/layouts/pageTittle'
import "./index.css"

const Home = props => {
    return(
        <div className='Home'>
            <PageTittle tittle={"Home"} content={"You're Welcome!"} isWarning={false} />
        </div>
    )
}

export default Home