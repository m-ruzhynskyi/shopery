export default function Discount({data}){
    function createPar(element) {
        if (element.time){return <p className='discount__par'>{element.time} Days Left!</p>}
        if(element.from){return <p className='discount__par'>Started at <span className={"discount__from"}> ${element.from}</span></p>}
        if(element.upTo){return <p className='discount__par'>Up to <span className={"discount__upTo"}> {element.upTo}% OFF</span></p>}
    }

    return (
        <div className='discounts'>
            {data.map(element => {
                return (
                    <div className='discount' key={element.id} id={element.id}>
                        <img className='discount__img' src={element.img} alt={element.title}/>
                        <div className="text">
                            <p className='discount__text'>{element.headText}</p>
                            <h3 className={"discount__title"}>{element.title}</h3>
                            {createPar(element)}
                            <button className="discount__butt">Shop Now&nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                <path d="M16 7.50049H1" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M9.94995 1.47546L16 7.49946L9.94995 13.5245" stroke="#00B307"
                                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg></button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}