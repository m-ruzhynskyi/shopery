import Head from "./Head/Head";
import IntroProducts from "./IntroProducts/IntroProducts";
export default function Home({data, setCart, setLikes}){
    return(
        <div className='home'>
            <Head data={data.head}/>
            <IntroProducts data={data.introOurProducts} setCart={setCart} setLikes={setLikes}/>
        </div>
    )
}