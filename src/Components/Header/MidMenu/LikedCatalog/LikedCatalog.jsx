import '../../../main.css'
import img from './Image-3.png'

export default function LikedCatalog({likes}){
    return(
        <div className='likedCatalog'>
            <div className='maininfo'>
                <div className='likedCatalog__head'>
                    <h4 className='likedCatalog__title'>My Wishlist ({likes})</h4>
                    <svg className='likedCatalog__svg' xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                         viewBox="0 0 25 25" fill="none">
                        <path d="M18.75 6.25L6.25 18.75" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M6.25 6.25L18.75 18.75" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="wishes">
                    <div className="wishes__wish">
                        <img className='wish__img' src={img} alt=""/>
                        <div className="wish__text">
                            <p className='wish__title'>Fresh Indian Orange</p>
                            <div className="wish__stor">
                                <p className="wish__price">$14.99</p>
                                <p className="wish__status stock">In stock</p>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_629_6652)">
                            <path
                                d="M12 23C18.0748 23 23 18.0748 23 12C23 5.92525 18.0748 1 12 1C5.92525 1 1 5.92525 1 12C1 18.0748 5.92525 23 12 23Z"
                                stroke="#CCCCCC" strokeMiterlimit="10"/>
                            <path d="M16 8L8 16" stroke="#666666" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M16 16L8 8" stroke="#666666" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_629_6652">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="buttons">
                <button className="goTo">Go to Wishes</button>
                <button className="addToCart">Add to cart</button>
            </div>
        </div>

    )
}