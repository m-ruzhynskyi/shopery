import '../../main.css'
import {NavLink} from "react-router-dom";
export default function BotMenu({}) {
    return (
        <div className='wrapBotMenu'>
            <div className='botMenu'>
                <div className='sections'>
                    <NavLink className='section' to=''>Home</NavLink>
                    <NavLink className='section' to='shop'>Shop</NavLink>
                    <NavLink className='section' to='blog'>Blog</NavLink>
                    <NavLink className='section' to='aboutUs'>About Us</NavLink>
                    <NavLink className='section' to='contactUs'>Contacts Us</NavLink>
                </div>
                <div className='tel'>
                    <svg className='tel__telSvg' xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                         viewBox="0 0 28 28" fill="none">
                        <path
                            d="M17.436 4.375C18.9194 4.77396 20.2719 5.55567 21.3581 6.64184C22.4442 7.72801 23.226 9.08051 23.6249 10.5639"
                            stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M16.5308 7.75687C17.4206 7.99625 18.2319 8.46521 18.8835 9.11678C19.535 9.76835 20.004 10.5797 20.2434 11.4695"
                            stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M10.115 13.6517C11.0224 15.5074 12.5263 17.0049 14.3859 17.9042C14.522 17.9688 14.6727 17.9966 14.8229 17.9851C14.9731 17.9736 15.1178 17.9231 15.2425 17.8386L17.9812 16.0134C18.1022 15.9326 18.2414 15.8833 18.3862 15.8698C18.5311 15.8564 18.677 15.8793 18.8107 15.9364L23.9339 18.1326C24.1079 18.2065 24.2532 18.335 24.3479 18.4987C24.4426 18.6623 24.4815 18.8523 24.4589 19.04C24.2967 20.307 23.6784 21.4714 22.7196 22.3154C21.7608 23.1593 20.5273 23.6249 19.25 23.625C15.3049 23.625 11.5214 22.0578 8.73179 19.2682C5.94218 16.4786 4.375 12.6951 4.375 8.75C4.37512 7.47279 4.84074 6.23941 5.68471 5.28077C6.52867 4.32213 7.6931 3.70396 8.96 3.542C9.14771 3.51936 9.33769 3.55832 9.50134 3.653C9.66499 3.74769 9.79345 3.89298 9.86738 4.067L12.0654 9.1945C12.1219 9.32698 12.1449 9.47137 12.1322 9.61485C12.1195 9.75833 12.0716 9.89647 11.9928 10.017L10.1728 12.7977C10.0901 12.923 10.0414 13.0675 10.0313 13.2171C10.0212 13.3668 10.05 13.5165 10.115 13.6517V13.6517Z"
                            stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <a className='tel__tel' href='tel:(219) 555-0114'>(219) 555-0114</a>
                </div>
            </div>
        </div>
    );
}
