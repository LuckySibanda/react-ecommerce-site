// import React from "react";
import PropTypes from "prop-types";

export default function ProductPage(props) {
  // console.log(props.image)
  // console.log(props)

 

  return (
    <div className="product--page">
      <div className="product--page--header">
        <div className="logo--container">
          <span className="material-icons business--logo">shopping_cart</span>
          <h5>Shop.com</h5>
        </div>
        <button className="close--button" onClick={() => props.showProd(false)}>
          <span className="material-icons">close</span>
        </button>
      </div>

      <div className="product--page--body">
        <div className="product--page--image--container">
          <img src={props.prodImage} alt="Product image" />
        </div>

        <div className="product--page--information">
          <div className="sub--header">
            <div className="product--page--name">{props.prodName}</div>

            <button
              className="product--page--close--button"
              onClick={() =>
                props.wishlistClick(
                  props.prodId,
                  props.prodName,
                  props.prodPrice,
                  props.prodImage
                )
              }
            >
              {/* Wishlist */}
              <span className="material-icons wishlist-icon">
                favorite_border
              </span>
            </button>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ratione
            quod corporis numquam beatae veritatis incidunt itaque animi minima?
            Sit nemo hic itaque impedit ducimus ea reprehenderit eaque libero
            accusantium.
          </p>

          <div className="product--page--prod--info">
            <div className="product--page--price">R {props.prodPrice}</div>

            <div className="ratings--info-container">
            <div className="stars--container">
              <img src={props.ratingStars} alt="" />
            </div>
            <div>Ratings: {props.ratingCount}</div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="product--page--addtocart"
        onClick={() =>
          props.handleClick(props.prodId, props.prodName, props.prodPrice, props.prodImage)
        }
      >
        Add to cart
      </button>
    </div>
  );
}

ProductPage.propTypes = {
  prodName: PropTypes.string.isRequired,
  prodImage: PropTypes.string.isRequired,
  prodPrice: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
  ratingStars: PropTypes.string.isRequired,
  prodId: PropTypes.string.isRequired,

  showProd: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  wishlistClick: PropTypes.func.isRequired,

  // superFunction: PropTypes.func.isRequired,
};

// image and price have switched values fix that, check order of paramms
