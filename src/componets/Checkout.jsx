import React from "react";
import PropTypes from 'prop-types'

export default function Checkout(props) {

    const [closeCheckout, setCloseCheckout] = React.useState(true)

    function showProdCheckout() {
        setCloseCheckout((prevState) => (prevState = !prevState))
    }

    return (
        <section className="checkout">
            {closeCheckout && (
                <>
                <button className="close--button" onClick={showProdCheckout}>
                <span className="material-icons">close</span>
              </button>
            <div className="cart--product--list">
            {props.cartArray.map((item) => (
              <div key={item.productId}>
                <div className="product--header">Item is available</div>
                <div className="cart--product--card">
                  <div className="cart--product--image--container">
                    <img src={item.productImage} alt="" />
                  </div>
                  <div className="cart--product--information">
                    <div className="cart--product--name">
                      {item.productName}
                    </div>

                    <div className="cart--product--quantity">
                      Item {item.quantity}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </>
            )}
        </section>
    )
}

// add delete item functionallity to cart array

Checkout.propTypes = {
    cartArray: PropTypes.arrayOf(
        PropTypes.shape({
          productId: PropTypes.string.isRequired,
          productName: PropTypes.string.isRequired,
          productImage: PropTypes.string.isRequired,
          productPrice: PropTypes.number.isRequired,
          quantity: PropTypes.number.isRequired,
        })
      ).isRequired,

    // closeCheckout: PropTypes.bool.isRequired,
}