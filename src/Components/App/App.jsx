import Header from '../Header/Header'
import {useEffect, useState} from "react";
import Main from "../Main/Main";
import {main} from "../dataMain";
import Footer from "../Footer/Footer";

function App() {
    let [cart, setCart] = useState(0);
    let [likes, setLikes] = useState(0);
    const [likesHistory, setLikeHistory] = useState([])
    const [cartHistory, setCartHistory] = useState([])
    let [curProduct, setCurProduct] = useState()
    let [showViewProduct, setShowViewProduct] = useState(false)

     function changeNumInCart(current) {
         let i = 1
         setCurProduct( curProduct = current.target.closest('.product, .isCatalog, .productView'))

         if(curProduct.classList.toggle('inCart')){
             setCart(cart +=i);
         }else {
             cart !== 0 && setCart(cart -=1);
         }
     }
     function changeNumLikes(current) {
         const i = 1
         setCurProduct( curProduct = current.target.closest('.product, .isCatalog, .productView'))

         if(curProduct.classList.toggle('isLiked')){
             setLikes(likes +=i);
         }else likes !== 0 && setLikes(likes -=1);
    }

    useEffect(() => {
        if (likes > likesHistory.length){
            let liked =  main['ourProducts'].filter(element => element.id.toString() === curProduct.id)[0]
            setLikeHistory(likesHistory => [...likesHistory, liked])
        }else {
            let disliked = Array.from(document.querySelectorAll('.product')).filter(element => element.id.toString() === curProduct.id)[0]
            disliked && disliked.classList.remove('isLiked')
            let liked = likesHistory.filter(element => element.id.toString() !== curProduct.id)
            setLikeHistory(liked)
        }
        // eslint-disable-next-line
    }, [likes]);
    useEffect(() => {
        if (cart > cartHistory.length){
            let carted =  main['ourProducts'].filter(element => element.id.toString() === curProduct.id)
            setCartHistory(cartHistory => [...cartHistory, carted[0]])
        }else {
            let disCarted = Array.from(document.querySelectorAll('.product')).filter(element => element.id.toString() === curProduct.id)[0]
            disCarted && disCarted.classList.remove('inCart')
            let carted = cartHistory.filter(element => element.id.toString() !== curProduct.id)
            setCartHistory(carted)
        }
        //eslint-disable-next-line
    }, [cart]);

  return (
    <>
        <Header cart={cart} likes={likes} changeNumLikes = {(current) => changeNumLikes(current)}  likesHistory={likesHistory} changeNumInCart = {(current) => changeNumInCart(current)} cartHistory={cartHistory}/>
        <Main showView={showViewProduct} setShowView={() => setShowViewProduct(!showViewProduct)} setCart={(current) => changeNumInCart(current)} setLikes={(current) => changeNumLikes(current)}/>
        <a className="goToTop" href='#'>
            <svg enableBackground="new 0 0 32 32" height="32px" viewBox="0 0 32 32" width="32px"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"
                    fill="#515151"/>
            </svg>
        </a>
        <Footer/>
    </>
  );
}

export default App;
