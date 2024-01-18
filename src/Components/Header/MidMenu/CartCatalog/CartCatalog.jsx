import '../../../main.css'
import CreateCatalogProduct from "../CreateCatalogProduct/CreateCatalogProduct";

export default function CartCatalog({cart, showCart, changeCart, cartHistory, changeNumCart, sumCart}){
    return(
        <>
            <div className='cartCatalog'>
                <div className='maininfo'>
                    <div className='cartCatalog__head'>
                        <h4 className='cartCatalog__title'>Shopping Card ({cart})</h4>
                        <svg onClick={changeCart} className='cartCatalog__svg' xmlns="http://www.w3.org/2000/svg"
                             width="25" height="25"
                             viewBox="0 0 25 25" fill="none">
                            <path d="M18.75 6.25L6.25 18.75" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M6.25 6.25L18.75 18.75" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="cards">
                        {cartHistory.map(element => <CreateCatalogProduct changeList={changeNumCart} data={element} key={element.id} catalog={'inCart'} id={element.id}/>)}
                    </div>
                </div>
                <div className="buttons">
                    <div className="summary">
                        <p className='summary__text'>{cart} Products</p>
                        <h5 className="summary__price">${sumCart}</h5>
                    </div>
                    <button className="addToCart">Go To Cart</button>
                    <button className="goTo">Checkout</button>
                </div>
            </div>
        </>

    )
}