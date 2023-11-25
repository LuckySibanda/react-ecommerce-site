import React from "react";
import PropTypes from "prop-types";

export default function ProductPage(props) {
  // console.log(props.image)
  // console.log(props)
  return (
    <div className="product--page">
      <div className="product--page--head">
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
			<div className="product--page--name">
				{props.prodName}
			</div>

            <p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ratione quod corporis numquam beatae veritatis incidunt itaque animi minima? Sit nemo hic itaque impedit ducimus ea reprehenderit eaque libero accusantium.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore error odio quibusdam est et aut sint totam suscipit nemo aperiam magni, natus veritatis inventore. Vitae ullam ea praesentium a?
			</p>

			<div className="product--page--price">
				R {props.prodPrice}
			</div>

			<button className="addToCart"
				onClick={() =>
					props.handleClick(props.prodName, props.prodPrice, props.prodImage)}>

				Add to cart
			</button>

      <div>
          {props.ratingCount}
      </div>

        </div>
      </div>
      

      
    </div>
  );
}

ProductPage.propTypes = {
  prodName: PropTypes.string.isRequired,
  prodImage: PropTypes.string.isRequired,
  prodPrice: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,

  showProd: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};


// image and price have switched values fix that, check order of paramms
