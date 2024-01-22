import '../../main.css'
import image from './404.png'
import {Link} from "react-router-dom";
export default function NotData(){
    return(
        <div className='notData'>
            <img src={image} alt="404"/>
            <h2 className='notData__title'>Oops! page not found</h2>
            <p className='notData__description'>Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</p>
            <button className="notData__home"><Link to='/'>Back to Home</Link></button>
        </div>
    )
}