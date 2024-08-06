import React, { useEffect, useState } from 'react'
import FirstPage from './components/FirstPage'
import MainPage from './components/MainPage'
import Header from './components/Header'
import Menu from './components/Menu'
import Location from './components/Location'
import { AnimatePresence } from 'framer-motion'

export default function App(){
    const [close, setClose] = useState(true)
    // const [pages, setPages] = useState({home: true, menu: false, loc: false});
    useEffect(()=>{
        // window.addEventListener('keydown',()=> setClose(true), {once:true}) 
    },[])
    return (
        <AnimatePresence onExitComplete={()=>null}>
            <div className="main">
                {close && <Header/>}
                <FirstPage close={close} />
                {close && <MainPage/>}
                {close && <Menu/>}
                {close && <Location />}
            </div>
        </AnimatePresence>
    )
}