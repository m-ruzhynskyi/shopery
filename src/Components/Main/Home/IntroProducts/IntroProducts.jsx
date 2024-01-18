import '../../../main.css'
import ProductCard from "../../SimilarComponents/ProductCard/ProductCard";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
export default function IntroProducts({data, setCart, setLikes, setProdView}){
    const [prodCategory, setProdCategory] = useState('all')
    const [sortedData, setSortedData] = useState(data)

    useEffect(() => {
        if (prodCategory === 'all'){
            setSortedData(data)
        }else{
            const filterData = data.filter(element => element.category === prodCategory)
            setSortedData(filterData)
        }
    }, [prodCategory, data]);

    function updateProCategory (target){
        setProdCategory(target.textContent.toLowerCase())
        target.parentElement.classList.add('activeCat')
        // eslint-disable-next-line array-callback-return
        Array.from(target.closest('.introSet__sort').children).map(element => {element !== target.parentElement && element.classList.remove('activeCat')})
    }
    return(
        <>
            <div className="introSet">
                <h3 className="introSet__title">Introducing Our products</h3>
                <div className="introSet__sort">
                    <button className='sort__cat activeCat'><a href={'#products'} onClick={(e) => updateProCategory(e.target)}>All</a></button>
                    <button className='sort__cat'><a href={'#products'} onClick={(e) => updateProCategory(e.target)}>Vegetable</a></button>
                    <button className='sort__cat'><a href={'#products'} onClick={(e) => updateProCategory(e.target)}>Fruit</a></button>
                    <button className='sort__cat'><a href={'#products'} onClick={(e) => updateProCategory(e.target)}>Meat & Fish</a></button>
                    <Link to={'/shop'}>View All</Link>
                </div>
            </div>
            <section className='products' id="products">
                {sortedData.map(product => <ProductCard setProdView = {setProdView}  setCart={setCart} key={product.id} product={product} setLikes={setLikes}/>)}
            </section>
        </>
    )
}