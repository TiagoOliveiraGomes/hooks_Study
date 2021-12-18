import React, { useState } from 'react'
import './app.css'
import Content from '../components/layouts/content'
import Menu from '../components/layouts/menu'
import {BrowserRouter as Router} from 'react-router-dom'
import { DataContext, data } from '../data/dataContext'
import Store from '../data/store'

const App = props => {
    const [stateContext, setStateContext] = useState(data)
    return(
    <div className='app'>
        <Store >
            <DataContext.Provider value={{stateContext, setStateContext}}>
                <Router>
                    <Menu />
                    <Content />
                </Router>
            </DataContext.Provider>
        </Store>
    </div>
    )
}

export default App