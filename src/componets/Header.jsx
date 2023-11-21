import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  const [toShowCart, setToShowCart] = React.useState(false);
  const [toShowWishlist, setToShowWishlist] = React.useState(false);

  function showCart() {
    setToShowCart((prevState) => (prevState = !prevState));
  }

  function showWishlist() {
    setToShowWishlist((prevState) => (prevState = !prevState));
  }

  return (
    <header>
      <div className="logo--container">
        {/* replace with image */}
        <h4>[ Amazon ]</h4>
      </div>

      <form onSubmit={props.searchSubmit} className="search--box--container">
        <input className="search--product--input"
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
        <button>Search</button>
      </form>

      <div className="toggle--buttons">
        {/* toggles cart */}
        <button className="cart--button" onClick={showCart}>Cart</button>

        {/* toggles wishlist */}
        <button className="wishlist--button" onClick={showWishlist}>Wishlist</button>
      </div>

      {/* FOR WISHLIST */}
      {/* FOR THESE 2 THE BEST THING WOULD BE A A WHOLE BOX THAT COVERS MOST OF THE PAGE BUT MUST LEAVING OUT A CHUNK SO YOU CAN STILL SEE THE MAIN PAGE, BOX SHADOW AND Z-INDEX WILL HELP*/}

      {toShowWishlist && (
        <div className="wishlist"> <button onClick={showWishlist}>Close Cart</button>
          <h3>Wishlist</h3>
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
      )}

      {/* FOR CART */}
      {toShowCart && (
        <div className="cart"> <button onClick={showCart}>Close Cart</button>
          <h3>Cart</h3>

          <div className="cart--information">
            <h4>
              Products in Cart: <span>{props.cartCount}</span>
            </h4>

            <br />

            <h4>
              Amount: <span>{props.cartAmount}</span>
            </h4>
          </div>

          <div className="cart--product--list">
            {props.cartArray.map((item) => (
              <div className="cart--product--card" key={item.productId}>
                <div className="cart--product--name">
                  {/* think about including quantity as a span element */}
                  {item.productName}
                </div>

                <div className="cart--product--quantity">{item.quantity}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
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
