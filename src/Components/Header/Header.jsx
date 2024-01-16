import '../main.css'
import TopMenu from "./TopMenu/TopMenu";
import MidMenu from "./MidMenu/MidMenu";
import BotMenu from "./BotMenu/BotMenu";
import LikedCatalog from "./MidMenu/LikedCatalog/LikedCatalog";

export default function Header ({cart, likes}){
    return (
        <header>
            {/*<LikedCatalog likes={likes}/>*/}
            <TopMenu />
            <MidMenu cart={cart} likes={likes}/>
            <BotMenu />
        </header>
    )
}