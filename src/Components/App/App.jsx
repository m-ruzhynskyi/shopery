import Header from '../Header/Header'
import {useState} from "react";
import Main from "../Main/Main";


function App() {
    let [cart, setCart] = useState(0);
    let [likes, setLikes] = useState(0);

     function changeNumInCart(current) {
         let curProduct = current.target.closest('.product')
         let i = 1
         if(curProduct.classList.toggle('inCart')){
             setCart(cart +=i);
         }else {
             cart !== 0 && setCart(cart -=1);
         }
     }
     function changeNumLikes(current) {
         let curProduct = current.target.closest('.product')
         let i = 1
         if(curProduct.classList.toggle('isLiked')){
             setLikes(likes +=i);
         }else {
             likes !== 0 && setLikes(likes -=1);
         }     }

  return (
    <>
        <Header cart={cart} likes={likes}/>
        <Main setCart={(current) => changeNumInCart(current)} setLikes={(current) => changeNumLikes(current)}/>
    </>
  );
}

export default App;
