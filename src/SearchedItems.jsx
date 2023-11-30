// import React from "react";
import PropTypes from "prop-types";

export default function SearchedItems(props) {
    return (

        <div className="product--card">

				<div className="product--image--container"
					onClick={() =>
						props.handleProductClick(props.name, props.image, props.priceCents, props.id, props.ratingCount, props.ratingStars)}>

					<img className="product--image"
						onClick={() =>
							props.handleProductClick(props.name, props.image, props.priceCents, props.id, props.ratingCount, props.ratingStars)}
						src={props.image}
						alt="Image of product" />
				</div>


			<div className="product--information">

				<div className="product--name"
					onClick={() =>
						props.handleProductClick(props.name, props.image, props.priceCents, props.id, props.ratingCount, props.ratingStars)}>
					{props.name}
				</div>

				<div className="product--price">
					R {props.priceCents}
				</div>
			</div>


			<div className="action--buttons">
				<button className="addToCart"
					onClick={() =>
						props.handleClick(props.id, props.name, props.priceCents, props.image)}>

					Add to cart
				</button>







				{/* <div className="stars--container">
                    <img src={props.ratingStars} alt="" />
                </div> */}

				<div>
					<div className="stars--container">
						<img src={props.ratingStars} alt="" />
					</div>
					{/* <div>
                        ratings: {props.ratingCount}
                    </div> */}
				</div>
			</div>

			<button className="addtowishlist"
				onClick={() =>
					props.wishlistClick(props.id, props.name, props.priceCents, props.image)}>

				{/* Wishlist */}
				<span className="material-icons wishlist-icon">
					favorite_border
				</span>
			</button>

		</div>


        // <div className="product--card">

        //     <div className="product--image--container"
        //         onClick={() =>
        //             props.handleProductClick(props.name, props.image, props.priceCents, props.id, props.ratingCount, props.ratingStars)}>

        //         <img className="product--image"
        //             onClick={() =>
        //                 props.handleProductClick(props.name, props.image, props.priceCents, props.id, props.ratingCount, props.ratingStars)}
        //             src={props.image}
        //             alt="Image of product"/>
        //     </div>


        //     <div className="product--information">

        //         <div className="product--name" 
        //             onClick={() =>
        //                 props.handleProductClick(props.name, props.image, props.priceCents, props.id, props.ratingCount, props.ratingStars)}>
        //             {props.name}
        //         </div>

        //         <div className="product--price">
        //             R {props.priceCents}
        //         </div>
        //     </div>


        //     <div className="action--buttons">
        //         <button className="addToCart"
        //             onClick={() =>
        //                 props.handleClick(props.id, props.name, props.priceCents, props.image)}>
                    
        //             Add to cart
        //         </button>

                

        //         <button className="addtowishlist"
        //             onClick={() =>
        //                 props.wishlistClick(props.id, props.name, props.priceCents, props.image)}>
                    
        //             {/* Wishlist */}
        //             <span className="material-icons wishlist-icon">
        //             favorite_border
        //             </span>
        //         </button>


        //         <div>
        //         <div className="stars--container">
        //             <img src={props.ratingStars} alt="" />
        //         </div>
        //             <div>
        //                 ratings: {props.ratingCount}
        //             </div>
        //         </div>
        //     </div>


            
        // </div>
    );
}

SearchedItems.propTypes = {
    handleClick: PropTypes.func.isRequired,
    wishlistClick: PropTypes.func.isRequired,
    handleProductClick: PropTypes.func.isRequired,

    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    priceCents: PropTypes.number.isRequired,

    ratingStars: PropTypes.string.isRequired,

    ratingCount: PropTypes.number.isRequired,
    // ratingStars: PropTypes.string.isRequired,
};
