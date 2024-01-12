import Button from "../../SimilarComponents/Button/Button";
import '../../../main.css'

export default function Head({data}){
    function CreateSlide(dataItem, key){
        return (
            <div className='slide' key={key}>
                <img className='slide__photo' alt='' src={dataItem.img}/>
                <div className='text'>
                    <p className='text__motto'>{dataItem.motto}</p>
                    <h1 className='text__title'>{dataItem.title}</h1>
                    <h3 className='text__discount'>{dataItem.discount.normalText}<span
                        className='text__discountHighlight'>{dataItem.discount.attentionText}</span></h3>
                    <p className='text__paragraph'>{dataItem.paragraph}</p>
                    <Button/>
                </div>
            </div>
        )
    }
    function CreateBenefit(dataItem) {
        return(
            <div className='benefits'>
                {Object.keys(dataItem).map(item => {
                const benefitItem = dataItem[item]
                    return (
                        <div className='benefits__benefit'>
                            <img className='benefit__img' alt='' src={benefitItem.img}/>
                            <div className='benefit__text'>
                                <h5 className='benefit__title'>{benefitItem.text}</h5>
                                <p className='benefit__paragraph'>{benefitItem.p}</p>
                                </div>
                            </div>
                    )
            })}
        </div>
        )
    }

    return (
        <div className='head'>
            {Object.keys(data).map(item => {
                const dataItem = data[item]
                return (
                    <>
                        {item !== 'benefits' && CreateSlide(dataItem, item)}
                        {item === 'benefits' && CreateBenefit(dataItem)}

                    </>

                )
            })
            }
        </div>
    )
}