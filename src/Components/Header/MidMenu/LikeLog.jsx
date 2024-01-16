export default function LikeLog ({numbersInLiked}) {

    function createByuInd (i){
        return (
            <div className='inLiked'>
                <p>{i}</p>
            </div>
        )
    }

    return (
        <>
            {
                (numbersInLiked)? createByuInd(numbersInLiked): null
            }
        </>
    )
}