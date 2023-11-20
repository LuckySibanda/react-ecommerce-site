import React from "react";
import PropTypes from "prop-types";

export default function ProductPage(props) {
  return (
    <div>
      <button onClick={() => props.showProd(false)}>back</button>
      <div className="image--container">
        <img src={props.image} alt="Product image" />
      </div>

      <h2>{props.name}</h2>
      <h4>{props.price}</h4>
    </div>
  );
}

ProductPage.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  showProd: PropTypes.func.isRequired,
};
