import React from "react";
import PropTypes from 'prop-types'

export default function SearchResults(props) {


    return (
        <div onClick={()=>props.handleProductClick(
            props.name, props.priceCents, props.image)} 
        
        
        className="product--card">
            <div onClick={()=>props.handleProductClick(
            props.name, props.priceCents, props.image)} 
            className="product--image--container">
                <img onClick={()=>props.handleProductClick(
            props.name, props.priceCents, props.image
            )}
                src={props.image} alt="" />
            </div>

            <p onClick={()=>props.handleProductClick(
            props.name, props.priceCents, props.image
            )}>
            {props.name}</p>

            <p>{props.priceCents}</p>

            <button 
                onClick={()=>props.handleClick(props.id, props.name, props.priceCents)}>
                Add to cart
            </button>

            <button 
                    onClick={()=>props.wishlistClick(props.id, props.name, props.priceCents)}>Add to Wishlist
            </button>
        </div>
    )
}

SearchResults.propTypes = {
    handleClick: PropTypes.func.isRequired,
    wishlistClick: PropTypes.func.isRequired,
    handleProductClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    priceCents: PropTypes.number.isRequired,
}