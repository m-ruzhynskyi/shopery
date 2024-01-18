import Head from "./Head/Head";
import IntroProducts from "./IntroProducts/IntroProducts";
import {useEffect, useState} from "react";
import ProductView from "../SimilarComponents/ProductView/ProductView";
import {Route, Routes} from "react-router-dom";
export default function Home({data, setCart, setLikes, setProdView, prodView, setShowView, showView}){
    const [introProductsList, setIntroProductsList] = useState([])

    useEffect( () => {
        setIntroProductsList(data.ourProducts.filter(element => element.type === 'intro'))
    }, [data.ourProducts])

    return(
        <div className='home'>
            <Head data={data.head}/>
            <IntroProducts setShowView={setShowView}  setProdView = {setProdView} data={introProductsList} setCart={setCart} setLikes={setLikes}/>
            {showView && <Routes><Route path={prodView.title} element={<ProductView setShowView={setShowView} prodView={prodView}/>}/></Routes>}
        </div>
    )
}