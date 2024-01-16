import '../../../main.css'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Button from "../../SimilarComponents/Button/Button";

export default function Head({data}){
    function CreateSlide(dataItem){
        return (
            <SplideSlide key={dataItem.id}>
                <div className='slide' key={dataItem.id}>
                    <img className='slide__photo' alt='' src={dataItem.img}/>
                    <div className='text' >
                        <p className='text__motto'>{dataItem.motto}</p>
                        <h1 className='text__title'>{dataItem.title}</h1>
                        <h3 className='text__discount'>{dataItem.discount.normalText}<span
                            className='text__discountHighlight'>{dataItem.discount.attentionText}</span></h3>
                        <p className='text__paragraph'>{dataItem.paragraph}</p>
                        <Button/>
                    </div>
                </div>
            </SplideSlide>
        )
    }
    function CreateBenefit(dataItem) {
        return(
            <div key={dataItem.id}>
                <div className='benefits__benefit' key = {dataItem.id}>
                    <img className='benefit__img' alt='' src={dataItem.img}/>
                    <div className='benefit__text'>
                        <h5 className='benefit__title'>{dataItem.text}</h5>
                        <p className='benefit__paragraph'>{dataItem.p}</p>
                    </div>
                </div>
        </div>
        )
    }
    return (
        <section className='head'>
            <Splide options={{
                arrows: false,
                speed: 800,
                type: 'loop',
                autoplay: true,
                pauseOnHover: false,
                interval: 10000,
                resetProgress: false}}>
                {data.slides.map(element => CreateSlide(element))}
            </Splide>
            <div className='benefits'>
                {data.benefits.map(element => CreateBenefit(element))}
            </div>
        </section>
    )
}