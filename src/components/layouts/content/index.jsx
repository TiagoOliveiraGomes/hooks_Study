import React from 'react'
import './index.css'
import {Routes, Route} from 'react-router-dom'
import Home from '../../../pages/home'
import About from '../../../pages/about'
import UseState from '../../../pages/useState'
import UseEffect from '../../../pages/useEffect'
import UseRef from '../../../pages/useRef'
import NotFound from '../../../pages/notFound'
import UseMemo from '../../../pages/useMemo'
import UseCallBack from '../../../pages/useCallBack'
import UseContext from '../../../pages/useContext'
import UseReducer from '../../../pages/useReducer'
import UseCustom from '../../../pages/useCustom'

const Content = props => {
    return(
    <main className='Content'>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/UseState' element={<UseState/>} />
            <Route path='/UseEffect' element={<UseEffect/>} />
            <Route path='/UseRef' element={<UseRef/>} />
            <Route path='/UseMemo' element={<UseMemo/>} />
            <Route path='/UseCallBack' element={<UseCallBack/>} />
            <Route path='/UseContext' element={<UseContext/>} />
            <Route path='/UseReducer' element={<UseReducer/>} />
            <Route path='/UseCustom' element={<UseCustom/>} />
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </main>
    )
}

export default Content