import '../../../main.css'
import CreateCatalogProduct from "../CreateCatalogProduct/CreateCatalogProduct";

export default function LikedCatalog({likes, showLikes, changeLikes, likesHistory, changeNumLikes}){
    return(
        <>
            <div className='likedCatalog'>
                <div className='maininfo'>
                    <div className='likedCatalog__head'>
                        <h4 className='likedCatalog__title'>My Wishlist ({likes})</h4>
                        <svg onClick={changeLikes} className='likedCatalog__svg' xmlns="http://www.w3.org/2000/svg"
                             width="25" height="25"
                             viewBox="0 0 25 25" fill="none">
                            <path d="M18.75 6.25L6.25 18.75" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M6.25 6.25L18.75 18.75" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="wishes">
                        {likesHistory.map(element => <CreateCatalogProduct changeList={changeNumLikes} data={element} key={element.id} catalog='isLiked'/>)}
                    </div>
                </div>
                <div className="buttons">
                    <button className="goTo">Go to Wishes</button>
                    <button className="addToCart">Add to cart</button>
                </div>
            </div>
        </>

    )
}