import React from "react";
import PropTypes from "prop-types";

export default function ProductPage(props) {
  // console.log(props.image)
  // console.log(props)
  return (
    <div className="product--page">
      <div className="product--head">
        <div>/ / /</div> 
        <button onClick={() => props.showProd(false)}>back</button>
      </div>
      <div className="product--specifics">
        <div className="prod--image--container">
          <img src={props.prodImage} alt="Product image" />
        </div>

        <div className="product--page--information">
          <div>{props.prodName}</div>
          
          <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ratione quod corporis numquam beatae veritatis incidunt itaque animi minima? Sit nemo hic itaque impedit ducimus ea reprehenderit eaque libero accusantium.
              </p>
              </div>
        </div>
      </div>
      
      <button className="addToCart"
        onClick={() =>
            props.handleClick(props.prodId, props.prodName, props.prodPrice, props.prodImage)}>
        
        Add to cart
    </button>
      
    </div>
  );
}

ProductPage.propTypes = {
  prodName: PropTypes.string.isRequired,
  prodImage: PropTypes.string.isRequired,
  prodPrice: PropTypes.number.isRequired,

  showProd: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};


// image and price have switched values fix that, check order of paramms
