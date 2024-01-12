import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Blog from "./Blog/Blog";
import About from "./About/About";
import Contact from "./Contact/Contact";

export default function Main({page}){
    return(
        <>
            {(page === 'home') && <Home />}
            {(page === 'shop') && <Shop />}
            {(page === 'blog') && <Blog />}
            {(page === 'about us') && <About />}
            {(page === 'contact us') && <Contact />}
        </>
    )
}