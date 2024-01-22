import Head from "./Head/Head";
import IntroProducts from "./IntroProducts/IntroProducts";
import {useEffect, useState} from "react";
import ProductView from "../SimilarComponents/ProductView/ProductView";
import {Route, Routes} from "react-router-dom";
import Discount from "./DiscountBlock/Discount";
export default function Home({data, setCart, setLikes, setShowView, showView}){
    const [introProductsList, setIntroProductsList] = useState([])
    const [prodView, setProdView] = useState()

    function setView(current){
        setShowView(!showView)
        setProdView(data[0]["ourProducts"].filter(element => element.id.toString() === current.closest('.product').id)[0])
    }

    useEffect(() => {
        showView ? document.body.style.overflow = 'hidden': document.body.style.overflow = '';
    }, [showView]);

    useEffect( () => {
        data.length && setIntroProductsList(data[0]['ourProducts'].filter(element => element.type === 'intro'))
    }, [data])

    return(
        <>
            {data.map(element => {
                return(
                    <div className='home' key={'home'}>
                        <Head data={element.head}/>
                        <IntroProducts setShowView={setShowView}  setProdView = {(current)=>setView(current.target)} data={introProductsList} setCart={setCart} setLikes={setLikes}/>
                        {showView && <Routes><Route path={prodView.title} element={<ProductView setShowView={setShowView} prodView={prodView}/>}/></Routes>}
                        <Discount data={element['discount']}/>
                    </div>
                )
            })}
        </>
    )
}