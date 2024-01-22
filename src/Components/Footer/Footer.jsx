import '../../index.css'
export default function Footer(){
    return(
        <div className='footer'>
            <div className="sections">
                <section className="one">
                    <h4 className='sec__header'>Contacts</h4>
                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                    <p className="one__text">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui,
                        eget bibendum magna congue nec.</p>
                    <div className="contsct">
                        <a href="tel:219-555-0114">(219)-555-0114</a>
                        <p className='contsct__text'>or</p>
                        <a href="mailto:Proxy@mail.com">Proxy@mail.com</a>
                    </div>
                </section>
                <section className="two">
                    <h4 className='sec__header'>Helps</h4>
                    <p>Contacts</p>
                    <p>FAQ</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </section>
                <section className="three">
                    <h4 className='sec__header'>Proxy</h4>
                    <p>About</p>
                    <p>Shop</p>
                    <p>Products</p>
                    <p>Products Details</p>
                    <p>Track Order</p>
                </section>
                <section className="four">
                    <h4 className='sec__header'>My Account</h4>
                    <p>My Account</p>
                    <p>Order History</p>
                    <p>Shopping Cart</p>
                    <p>Wishlist</p>
                    <p>Settings</p>
                </section>
            </div>
        </div>
    )
}