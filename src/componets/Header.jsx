import React from "react";
import PropTypes from 'prop-types'

export default function Header(props) {

    const [toShowCart, setToShowCart] = React.useState(false)
    const[toShowWishlist, setToShowWishlist] = React.useState(false)

    function showCart() {
        setToShowCart(prevState => prevState = !prevState)
    }

    function showWishlist() {
        setToShowWishlist(prevState => prevState = !prevState)
    }
    // function decon() {
    //     console.log(props.cartArray)
    //     // return props.cartArray
    // }
    return (
        <header>
            <div className="logo--container">
                {/* replace with image */}
                <h4>Amazon</h4>
            </div>

            <form onSubmit={props.searchSubmit} className="search--box--container">
                <input 
                    type="text"
                    placeholder="Search"
                    name="productSearch"
                    value={props.productSearchValue}
                    onChange={props.handleSearchChange}
                />
                <div className="search--icon">
                    {/* <img src="./vite.svg" alt="" /> */}
                    {/* replace with search icon */}
                </div>
                <button>Search</button>
            </form>

            <button onClick={showCart}>Cart</button>

            <button onClick={showWishlist}>Wishlist</button>

            {/* {open && <div className="cart">
                <div>{props.cartCount} {props.cartAmount}</div>
                <div className="cart--propducts">
                    {props.cartArray}
                </div>
            </div>} */}


            {/* FOR WISHLIST */}
            {toShowWishlist && <div className="wishlist">
                <h3>Wishlist</h3>
                <div className="cart--propducts">
                    {props.wishlistArray.map((item) => (
                        <div key={item.productId}>
                            {item.productName} {item.productPrice}</div>
                    ))}
                </div>
            </div>}
            
            {/* FOR CART */}
            {toShowCart && <div className="cart">
                <h3>Cart</h3>
                <div><h4>Products in Cart:</h4>{props.cartCount} 
                <br />
                <h4>Amount:</h4>{props.cartAmount}</div>
                <div className="cart--propducts">
                    {props.cartArray.map((item) => (
                        <div key={item.productId}>
                            {item.productName} {item.quantity}</div>
                    ))}
                </div>
            </div>}
        </header>
    )
}



Header.propTypes = {
    productSearchValue: PropTypes.string.isRequired,
    handleSearchChange: PropTypes.func.isRequired,
    searchSubmit: PropTypes.func.isRequired,


    cartCount: PropTypes.number.isRequired,
    cartAmount: PropTypes.number.isRequired,
    cartArray: PropTypes.arrayOf(
        PropTypes.shape({
            productId: PropTypes.string.isRequired,
            productName: PropTypes.string.isRequired,
            // productImage: PropTypes.string.isRequired,
            productPrice: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,

    
    wishlistArray: PropTypes.arrayOf(
        PropTypes.shape({
            productId: PropTypes.string.isRequired,
            productName: PropTypes.string.isRequired,
            productPrice: PropTypes.number.isRequired,
        })
    ).isRequired,
};