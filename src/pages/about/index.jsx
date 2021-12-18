import React from 'react'
import PageTittle from '../../components/layouts/pageTittle'
import './index.css'

const About = props => {
    return(
        <div className="About">
            <PageTittle tittle='About' content='This page is a test page for study...' isWarning={false} />
        </div>
    )
}

export default About