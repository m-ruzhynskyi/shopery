import '../main.css'
import TopMenu from "./TopMenu/TopMenu";
import MidMenu from "./MidMenu/MidMenu";
import BotMenu from "./BotMenu/BotMenu";
import LikedCatalog from "./MidMenu/LikedCatalog/LikedCatalog";
import CartCatalog from "./MidMenu/CartCatalog/CartCatalog";
import {useEffect, useState} from "react";

export default function Header ({cart, likes, likesHistory, changeNumLikes, changeNumInCart,cartHistory}){
    let [showLikes, setShowLikes] = useState(false)
    let [showCart, setShowCart] = useState(false)
    const [allPrice, setAllPrice] = useState(0)


    function changeShowLikes(){
        setShowLikes(!showLikes)
        !showLikes ? document.body.style.overflow = 'hidden': document.body.style.overflow = '';
    }
    function changeShowCart(){
        setShowCart(!showCart)
        !showCart ? document.body.style.overflow = 'hidden': document.body.style.overflow = '';
    }

    useEffect(() => {
        let sum = 0;
        cartHistory.map(element => sum += element.price);
        sum = (sum === 0) ? '0.00' : sum;
        setAllPrice(sum)
        // eslint-disable-next-line
    }, [cartHistory]);
    return (
        <header id='header'>
            {(showLikes || showCart) && <div className='shadow'></div>}
            {showLikes && <LikedCatalog changeNumLikes={changeNumLikes} changeLikes={changeShowLikes} likes={likes} likesHistory={likesHistory}/>}
            {showCart && <CartCatalog changeCart={changeShowCart} changeNumCart={changeNumInCart} cartHistory={cartHistory} cart={cart} sumCart={allPrice}/>}
            <TopMenu/>
            <MidMenu changeLikes={changeShowLikes} changeCart={changeShowCart} cart={cart} likes={likes} sumCart={allPrice}/>
            <BotMenu/>
        </header>
    )
}