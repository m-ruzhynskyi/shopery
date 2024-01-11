import './topMenu.css'

export default function TopMenu(){
    return(
        <>
            <div className='topMenu'>
                <div className='location'>
                    <svg className='location__svg' xmlns="http://www.w3.org/2000/svg" width="17" height="20"
                         viewBox="0 0 17 20" fill="none">
                        <path
                            d="M16 8.36364C16 14.0909 8.5 19 8.5 19C8.5 19 1 14.0909 1 8.36364C1 6.41068 1.79018 4.53771 3.1967 3.15676C4.60322 1.77581 6.51088 1 8.5 1C10.4891 1 12.3968 1.77581 13.8033 3.15676C15.2098 4.53771 16 6.41068 16 8.36364Z"
                            stroke="#666666" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M8.5 10.8182C9.88071 10.8182 11 9.71925 11 8.36364C11 7.00803 9.88071 5.90909 8.5 5.90909C7.11929 5.90909 6 7.00803 6 8.36364C6 9.71925 7.11929 10.8182 8.5 10.8182Z"
                            stroke="#666666" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className='location__place'>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                </div>
                <div className='smallMenu'>
                    <div className='mainOptionsSite'>
                        <select className='mainOptionsSite__currency'>
                            <option value='USD' className='cuurency__value'>USD</option>
                            <option value='UAH' className='cuurency__value'>UAH</option>
                        </select>
                        <select className='mainOptionsSite__language'>
                            <option value='Eng' className='language__value'>Eng</option>
                            <option value='Ua' className='langueage__value'>Ua</option>
                        </select>
                    </div>
                    <div className='account'>
                        <p className='sighIn'>Sign In</p>
                        <p>&nbsp;&nbsp;/&nbsp;&nbsp;</p>
                        <p className='signUp'>Sign Up</p>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    )
}