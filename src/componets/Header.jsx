import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  const [toShowCart, setToShowCart] = React.useState(false);
  const [toShowWishlist, setToShowWishlist] = React.useState(false);
  const [toShowCheckout, setToShowCheckout] = React.useState(false)

  function showCart() {
    setToShowCart((prevState) => (prevState = !prevState));
  }

  function showWishlist() {
    setToShowWishlist((prevState) => (prevState = !prevState));
  }

  function showCheckout() {
    setToShowCheckout((prevState) => (prevState = !prevState))
}

  return (
    <>
    <header>
      <div className="logo--container">
        {/* replace with image */}

        <span className="material-icons business--logo">shopping_cart</span>
        <h5>Shop.com</h5>
      </div>

      <form onSubmit={props.searchSubmit} className="search--box--container">
        <input
          className="search--product--input"
          type="text"
          placeholder="Search"
          name="productSearch"
          value={props.productSearchValue}
          onChange={props.handleSearchChange}
        />

        {/* <div className="search--icon"> */}
        {/* <img src="./vite.svg" alt="" /> */}
        {/* replace with search icon */}
        {/* </div> */}

        {/* Search submit button */}
        <button className="search--button">
          <span className="material-icons">search</span>
        </button>
      </form>

      <div className="toggle--buttons">

        {/* add home button */}

        {/* toggles cart */}
        <button className="cart--button" onClick={showCart}>
          {/* Cart */}
          <span className="material-icons">local_mall</span>
        </button>

        {/* toggles wishlist */}
        <button className="wishlist--button" onClick={showWishlist}>
          {/* Wishlist */}
          <span className="material-icons">favorite_border</span>
        </button>
      </div>

      {/* FOR WISHLIST */}
      {/* FOR THESE 2 THE BEST THING WOULD BE A A WHOLE BOX THAT COVERS MOST OF THE PAGE BUT MUST LEAVING OUT A CHUNK SO YOU CAN STILL SEE THE MAIN PAGE, BOX SHADOW AND Z-INDEX WILL HELP*/}

      {toShowWishlist && (
        props.wishlistArray.length > 0 ? (
          
		<>
		<div className="overlay" onClick={showWishlist}></div>
        <div className="wishlist">
          <div className="wishlist--header">
            <h3>Wishlist</h3>
            <button className="close--button" onClick={showWishlist}>
              <span className="material-icons">close</span>
            </button>
          </div>
          <div className="wishlist--product--list">
            {props.wishlistArray.map((item) => (
              <div className="wishlist--product--card" key={item.productId}>
                <div className="wishlist--product--name">
                  {/* think about including price as a span element */}
                  {item.productName}
                </div>

                <div className="wishlist--product--price">
                  {item.productPrice}
                </div>
              </div>
            ))}
          </div>
        </div>
		</>
      
        ) : (
          <div className="cart">
            Nothing in your wishlist
            <button className="close--button" onClick={showWishlist}>
                <span className="material-icons">close</span>
              </button>
          </div>
        )
      )}

      {/* FOR CART */}

      {/* {props.cartCount === 0 ? <div className="no--cart--items">
                    <h2>You have nothing in your cart</h2>
                    <button onClick={showCart}>Continue Shopping</button>
                </div>} */}

      {toShowCart && (
        props.cartArray.length > 0 ? (
          
		<>
		<div className="overlay" onClick={showCart}></div>
        <div className="cart">
          <div className="cart--header">
            <div className="cart--header--text">Cart</div>
            <div>
              <button className="close--button" onClick={showCart}>
                <span className="material-icons">close</span>
              </button>
            </div>
          </div>
          <div className="cart--count">{props.cartCount} Items</div>

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

          <hr />
          <div className="display--cart--total">
            <span>Total ({props.cartCount})</span>{" "}
            <span>{props.cartAmount}</span>
          </div>
          <div className="checkout">
            <button onClick={showCheckout} className="checkout--button">Checkout</button>
          </div>
        </div>
		</>
      
        ) : (
          <div className="cart">
            Nothing in your cart
            <button className="close--button" onClick={showCart}>
                <span className="material-icons">close</span>
              </button>
          </div>
        )
      )}
    </header>


    <section>
            {toShowCheckout && (
                <>
                <button className="close--button" onClick={showCheckout}>
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


    </>
  );
}

Header.propTypes = {
  productSearchValue: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  searchSubmit: PropTypes.func.isRequired,
  // showCheckout: PropTypes.func.isRequired,

  cartCount: PropTypes.number.isRequired,
  cartAmount: PropTypes.number.isRequired,
  cartArray: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      productImage: PropTypes.string.isRequired,
      productPrice: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,

  wishlistArray: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      productPrice: PropTypes.number.isRequired,
      productImage: PropTypes.string.isRequired,
    })
  ).isRequired,
};
