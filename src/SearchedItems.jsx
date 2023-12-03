import React from "react";
import PropTypes from "prop-types";

export default function SearchedItems(props) {

    const [toShowCart, setToShowCart] = React.useState(false);

	const price = (props.priceCents / 10).toFixed(2)

	return (
		<div className="product--card">

				<span onClick={props.superFunction}>
					<span onClick={() => props.CartScroll(toShowCart)}>
						<div className="product--image--container"
							onClick={() =>
								props.handleProductClick(props.name, props.image, props.priceCents, props.id, props.ratingCount, props.ratingStars)}>
								<img className="product--image"
									onClick={() =>
										props.handleProductClick(props.name, props.image, props.priceCents, props.id, props.ratingCount, props.ratingStars)}
									src={props.image}
									alt="Image of product" />

								<div className="sale--div">50% OFF</div>
						</div>
					</span>
				</span>

				<hr className="image--line" />


			<div className="product--information">
				
				<span onClick={props.superFunction}>
				<span onClick={() => props.CartScroll(toShowCart)}>
				<div className="product--name"
					onClick={() =>
						props.handleProductClick(props.name, props.image, props.priceCents, props.id, props.ratingCount, props.ratingStars)}
						>
					{props.name}
				</div>
				</span>
				</span>

				<div className="product--price">
					{/* R {props.priceCents /10} */}
					R {price}
				</div>
			</div>


			<div className="action--buttons">
				<button className="addToCart"
					onClick={() =>
						props.handleClick(props.id, props.name, props.priceCents, props.image)}>

					Add to cart
				</button>

			</div>

			<button className="addtowishlist"
				onClick={() =>
					props.wishlistClick(props.id, props.name, props.priceCents, props.image)}>

				{/* Wishlist */}
				<span className="material-symbols-rounded wishlist-icon">
					favorite
				</span>
			</button>

		</div>
	);




    // const price = (props.priceCents / 10).toFixed(2)
    // return (

    //     <div className="product--card">

	// 			<div className="product--image--container"
	// 				onClick={() =>
	// 					props.handleProductClick(props.name, props.image, props.priceCents, props.id, props.ratingCount, props.ratingStars)}>

	// 				<img className="product--image"
	// 					onClick={() =>
	// 						props.handleProductClick(props.name, props.image, props.priceCents, props.id, props.ratingCount, props.ratingStars)}
	// 					src={props.image}
	// 					alt="Image of product" />
	// 			</div>
    //             <hr className="image--line" />

	// 		<div className="product--information">

	// 			<div className="product--name"
	// 				onClick={() =>
	// 					props.handleProductClick(props.name, props.image, props.priceCents, props.id, props.ratingCount, props.ratingStars)}>
	// 				{props.name}
	// 			</div>

	// 			<div className="product--price">
	// 				{/* R {props.priceCents} */}
    //                 R {price}
	// 			</div>
	// 		</div>


	// 		<div className="action--buttons">
	// 			<button className="addToCart"
	// 				onClick={() =>
	// 					props.handleClick(props.id, props.name, props.priceCents, props.image)}>

	// 				Add to cart
	// 			</button>


	// 		</div>

	// 		<button className="addtowishlist"
	// 			onClick={() =>
	// 				props.wishlistClick(props.id, props.name, props.priceCents, props.image)}>

	// 			{/* Wishlist */}
	// 			<span className="material-symbols-rounded wishlist-icon">
	// 				favorite
	// 			</span>
	// 		</button>

	// 	</div>

    // );
}

SearchedItems.propTypes = {
    handleClick: PropTypes.func.isRequired,
	wishlistClick: PropTypes.func.isRequired,
	handleProductClick: PropTypes.func.isRequired,

	CartScroll: PropTypes.func.isRequired,
	superFunction: PropTypes.func.isRequired,
	

	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	priceCents: PropTypes.number.isRequired,

	ratingStars: PropTypes.string.isRequired,

	ratingCount: PropTypes.number.isRequired,
	// ratingStars: PropTypes.string.isRequired,
};
