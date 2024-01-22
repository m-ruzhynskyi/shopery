import Home from "./Home/Home";
import {Routes, Route} from 'react-router-dom'

import {useEffect, useState} from "react";
import NotData from "./404/NotData";
import axios from "axios";

export default function Main({setCart, setLikes, setShowView, showView}){
    const [main, setMain] = useState([])

    useEffect(() => {
        axios.get('https://65ae363a1dfbae409a744145.mockapi.io/shoperly')
            .then(r => setMain(r.data))
    }, []);

    return(
        <>
            {showView && <div className='shadow'></div>}
            <Routes>
                <Route path='/*' element={<Home showView={showView} setShowView={setShowView} setCart={setCart} data={main} setLikes={setLikes}/>}/>
                <Route path='/shop/*' element={<NotData/>}/>
                <Route path='/blog' element={<NotData/>}/>
                <Route path='/aboutUs' element={<NotData/>}/>
                <Route path='/contactUs' element={<NotData/>}/>
            </Routes>
        </>
    )
}