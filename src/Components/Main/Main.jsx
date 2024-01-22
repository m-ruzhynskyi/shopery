import Home from "./Home/Home";
import {Routes, Route} from 'react-router-dom'
import {main} from "../dataMain";
import {useEffect, useState} from "react";
import NotData from "./404/NotData";

export default function Main({setCart, setLikes, setShowView, showView}){
    const [prodView, setProdView] = useState()
    function setView(current){
        setShowView(!showView)
        setProdView(main["ourProducts"].filter(element => element.id.toString() === current.closest('.product').id)[0])
    }

    useEffect(() => {
        showView ? document.body.style.overflow = 'hidden': document.body.style.overflow = '';
    }, [showView]);
    return(
        <>
            {showView && <div className='shadow'></div>}
            <Routes>
                <Route path='/*' element={<Home showView={showView} setShowView={setShowView} setProdView = {(current)=>setView(current.target)} setCart={setCart} data={main} setLikes={setLikes} prodView={prodView}/>}/>
                <Route path='/shop/*' element={<NotData/>}/>
                <Route path='/blog' element={<NotData/>}/>
                <Route path='/aboutUs' element={<NotData/>}/>
                <Route path='/contactUs' element={<NotData/>}/>
            </Routes>
        </>
    )
}