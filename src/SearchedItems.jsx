import React from "react";
import PropTypes from "prop-types";

export default function SearchResults(props) {
  return (
    <div className="product--card">

            <div className="product--image--container"
                onClick={() =>
                    props.handleProductClick(props.name, props.priceCents, props.image)}>

                <img className="product--image"
                    onClick={() =>
                        props.handleProductClick(props.name, props.priceCents, props.image)}
                    src={props.image}
                    alt="Image of product"/>
            </div>


            <div className="product--information">

                <div className="product--name" 
                    onClick={() =>
                        props.handleProductClick(props.name, props.priceCents, props.image)}>
                    {props.name}
                </div>

                <div className="product--price">
                    R {props.priceCents}
                </div>
            </div>


            <div className="action--buttons">
                <button className="addToCart"
                    onClick={() =>
                        props.handleClick(props.id, props.name, props.priceCents)}>
                    
                    Add to cart
                </button>

                <button className="addtowishlist"
                    onClick={() =>
                        props.wishlistClick(props.id, props.name, props.priceCents)}>
                    
                    Wishlist
                </button>
            </div>


            
        </div>
    // <div className="product--card"
    //   onClick={() =>
    //     props.handleProductClick(props.name, props.priceCents, props.image)}>

    //   <div
    //     onClick={() =>
    //       props.handleProductClick(props.name, props.priceCents, props.image)}
    //     className="product--image--container"
    //   >
    //     <img
    //       onClick={() =>
    //         props.handleProductClick(props.name, props.priceCents, props.image)
    //       }
    //       src={props.image}
    //       alt=""
    //     />
    //   </div>

    //   <p
    //     onClick={() =>
    //       props.handleProductClick(props.name, props.priceCents, props.image)
    //     }
    //   >
    //     {props.name}
    //   </p>

    //   <p>{props.priceCents}</p>

    //   <button
    //     onClick={() =>
    //       props.handleClick(props.id, props.name, props.priceCents)
    //     }
    //   >
    //     Add to cart
    //   </button>

    //   <button
    //     onClick={() =>
    //       props.wishlistClick(props.id, props.name, props.priceCents)
    //     }
    //   >
    //     Add to Wishlist
    //   </button>
    // </div>
  );
}

SearchResults.propTypes = {
  handleClick: PropTypes.func.isRequired,
  wishlistClick: PropTypes.func.isRequired,
  handleProductClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  priceCents: PropTypes.number.isRequired,
};
