import React from "react";
import PropTypes from 'prop-types'

export default function Header(props) {

    const [open, setOpen] = React.useState(false)

    function showCart() {
        setOpen(prevState => prevState = !prevState)
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

            <form className="search--box--container">
                <input 
                    type="text"
                    placeholder="Search"
                />
                <div className="search--icon">
                    {/* <img src="./vite.svg" alt="" /> */}
                    {/* replace with search icon */}
                </div>
            </form>

            <button onClick={showCart}>Cart</button>

            {/* {open && <div className="cart">
                <div>{props.cartCount} {props.cartAmount}</div>
                <div className="cart--propducts">
                    {props.cartArray}
                </div>
            </div>} */}

            {open && <div className="cart">
                <div>{props.cartCount} {props.cartAmount}</div>
                <div className="cart--propducts">
                    {props.cartArray.map((item) => (
                        <div key={item.productId}>
                            {item.productName} {item.quantity}
                        </div>
                    ))}
                </div>
            </div>}
        </header>
    )
}



Header.propTypes = {
    cartCount: PropTypes.number.isRequired,
    cartAmount: PropTypes.number.isRequired,
    cartArray: PropTypes.arrayOf(
        PropTypes.shape({
            productId: PropTypes.string.isRequired,
            productName: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
    // carty: PropTypes.object.isRequired,
};