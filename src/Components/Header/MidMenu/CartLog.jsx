export default function CartLog ({numbersInCart}) {
    
    function createByuInd (i){
        return (
            <div className='inCart'>
                <p>{i}</p>
            </div>
        )
    }

    return (
        <>
            {
                (numbersInCart)? createByuInd(numbersInCart): null
            }
        </>
    )
}