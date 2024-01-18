import '../../../main.css'
import {NavLink} from "react-router-dom";

export default function ProductCard({product, setCart, setLikes, setProdView}){
    function createStars(stars, id){
        let rating = []
        for(let i = 0; i < stars; i++){
            rating.push(
                <div key={`star-${id}-${i}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                        <path
                            d="M9.81008 13.4111L13.3566 15.6577C13.81 15.9446 14.3725 15.5177 14.2381 14.9884L13.2138 10.9581C13.1848 10.8458 13.1882 10.7276 13.2234 10.6172C13.2586 10.5067 13.3243 10.4085 13.4129 10.3337L16.5933 7.68711C17.0106 7.33949 16.7958 6.64593 16.2586 6.61105L12.1056 6.34105C11.9938 6.33312 11.8866 6.29359 11.7964 6.22707C11.7061 6.16055 11.6367 6.06977 11.596 5.9653L10.0469 2.06493C10.0047 1.95408 9.92984 1.85867 9.83219 1.79136C9.73455 1.72404 9.61875 1.68799 9.50015 1.68799C9.38155 1.68799 9.26575 1.72404 9.1681 1.79136C9.07046 1.85867 8.99558 1.95408 8.9534 2.06493L7.40427 5.9653C7.36372 6.06988 7.29429 6.16077 7.20406 6.2274C7.11383 6.29402 7.00652 6.33364 6.89465 6.34161L2.74171 6.61161C2.20508 6.64593 1.98908 7.33949 2.40702 7.68711L5.5874 10.3342C5.67588 10.409 5.7415 10.5072 5.77673 10.6175C5.81195 10.7278 5.81534 10.8459 5.78652 10.9581L4.83702 14.6959C4.67558 15.3309 5.35115 15.8434 5.89452 15.4986L9.19077 13.4111C9.28342 13.3522 9.39093 13.3209 9.50071 13.3209C9.61049 13.3209 9.718 13.3522 9.81065 13.4111H9.81008Z"
                            fill="#FF8A00"/>
                    </svg>
                </div>
            )
        }
        for (let i = 0; i < 5 - stars; i++){
            rating.push(
                <div key={`empty-star-${id}-${i}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                        <path
                            d="M9.81008 13.4111L13.3566 15.6577C13.81 15.9446 14.3725 15.5177 14.2381 14.9884L13.2138 10.9581C13.1848 10.8458 13.1882 10.7276 13.2234 10.6172C13.2586 10.5067 13.3243 10.4085 13.4129 10.3337L16.5933 7.68711C17.0106 7.33949 16.7958 6.64593 16.2586 6.61105L12.1056 6.34105C11.9938 6.33312 11.8866 6.29359 11.7964 6.22707C11.7061 6.16055 11.6367 6.06977 11.596 5.9653L10.0469 2.06493C10.0047 1.95408 9.92984 1.85867 9.83219 1.79136C9.73455 1.72404 9.61875 1.68799 9.50015 1.68799C9.38155 1.68799 9.26575 1.72404 9.1681 1.79136C9.07046 1.85867 8.99558 1.95408 8.9534 2.06493L7.40427 5.9653C7.36372 6.06988 7.29429 6.16077 7.20406 6.2274C7.11383 6.29402 7.00652 6.33364 6.89465 6.34161L2.74171 6.61161C2.20508 6.64593 1.98908 7.33949 2.40702 7.68711L5.5874 10.3342C5.67588 10.409 5.7415 10.5072 5.77673 10.6175C5.81195 10.7278 5.81534 10.8459 5.78652 10.9581L4.83702 14.6959C4.67558 15.3309 5.35115 15.8434 5.89452 15.4986L9.19077 13.4111C9.28342 13.3522 9.39093 13.3209 9.50071 13.3209C9.61049 13.3209 9.718 13.3522 9.81065 13.4111H9.81008Z"
                            fill="#CCCCCC"/>
                    </svg>
                </div>
            )
        }
        return (
            <div className='rating' key={`rating-${id}`}>
                {rating.map(star => {
                    return star
                })}
            </div>
        )
    }
    return (
        <div className={'product ' + product.category} key={product.id} id={product.id}>
            <img src={product.img} alt={product.title} className='product__image'/>
            <div className="product__buttons">
                <svg onClick={setLikes} className='buttons__liked' xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                     viewBox="0 0 23 24" fill="none">
                    <path
                        d="M12.4997 21.0541C-7.49987 9.99997 6.50011 -2.00003 12.4997 5.58803C18.5001 -2.00003 32.5001 9.99997 12.4997 21.0541Z"
                        stroke="#002603" strokeWidth="1.5"/>
                </svg>
                <NavLink to={product.title}>
                    <svg onClick={setProdView} className='buttons__see' xmlns="http://www.w3.org/2000/svg" width="23"
                         height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12.5 4.24927C5 4.24927 2 12.0001 2 12.0001C2 12.0001 5 19.7493 12.5 19.7493C20 19.7493 23 12.0001 23 12.0001C23 12.0001 20 4.24927 12.5 4.24927V4.24927Z"
                            stroke="#002603" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M12.5 15.75C13.4946 15.75 14.4484 15.3549 15.1517 14.6517C15.8549 13.9484 16.25 12.9946 16.25 12C16.25 11.0054 15.8549 10.0516 15.1517 9.34835C14.4484 8.64509 13.4946 8.25 12.5 8.25C11.5054 8.25 10.5516 8.64509 9.84835 9.34835C9.14509 10.0516 8.75 11.0054 8.75 12C8.75 12.9946 9.14509 13.9484 9.84835 14.6517C10.5516 15.3549 11.5054 15.75 12.5 15.75V15.75Z"
                            stroke="#002603" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </NavLink>
            </div>
            <div className="product__bottom">
                <div className='product__text'>
                    <h5 className='text__title'>{product.title}</h5>
                    <p className='text__price'>${product.price}</p>
                    {createStars(product.stars, product.id)}
                </div>
                <div className="product__cart" onClick={setCart}>
                    <svg className='inCart' xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none">
                        <path
                            d="M8.5 10H5.5L3.5 21H21.5L19.5 10H16.5M8.5 10V7C8.5 4.79086 10.2909 3 12.5 3V3C14.7091 3 16.5 4.79086 16.5 7V10M8.5 10H16.5M8.5 10V13M16.5 10V13"
                            stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}