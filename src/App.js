import React, { useEffect, useState } from 'react'
import FirstPage from './components/FirstPage'

export default function App(){
    const [close, setClose] = useState(false)
    useEffect(()=>{
        window.addEventListener('keydown',()=> setClose(true), {once:true})
    },[])
    return (
        <div className="main">
            <div className="rippleGradient"></div>
            <FirstPage close={close} />
            {close && <div>pp</div>}
        </div>
    )
}