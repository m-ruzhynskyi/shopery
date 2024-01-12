import {main} from '../dataMain'
import Head from "./Head/Head";
export default function Home(){
    return(
        <div className='home'>
            <Head data={main.head}/>
        </div>
    )
}