import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Blog from "./Blog/Blog";
import About from "./About/About";
import Contact from "./Contact/Contact";
import {Routes, Route} from 'react-router-dom'
import {main} from "./dataMain";

export default function Main({setCart, setLikes}){
    return(
        <>
            <Routes>
                <Route path='/home' element={<Home setCart={setCart} data={main} setLikes={setLikes}/>}/>
                <Route path='/' element={<Home setCart={setCart} data={main} setLikes={setLikes}/>}/>
                <Route path='/shop/*' element={<Shop/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/aboutUs' element={<About/>}/>
                <Route path='/contactUs' element={<Contact/>}/>
            </Routes>
        </>
    )
}