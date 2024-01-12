import '../main.css'
import TopMenu from "./TopMenu/TopMenu";
import MidMenu from "./MidMenu/MidMenu";
import BotMenu from "./BotMenu/BotMenu";

export default function Header ({setPage}){
    return (
        <header>
            <TopMenu />
            <MidMenu setAs={setPage} />
            <BotMenu setPage={setPage} />
        </header>
    )
}