import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
	const [toShowCart, setToShowCart] = React.useState(false);
	const [toShowWishlist, setToShowWishlist] = React.useState(false);
	const [toShowCheckout, setToShowCheckout] = React.useState(false);

	function showCart() {
		setToShowCart((prevState) => (prevState = !prevState));
	}

	function showWishlist() {
		setToShowWishlist((prevState) => (prevState = !prevState));
	}

	function showCheckout() {
		setToShowCheckout((prevState) => (prevState = !prevState));
	}

	function goHome() {
		setToShowCart(false);

		setToShowWishlist(false);

		setToShowCheckout(false);
	}

	// const styles = {
	//   overflow: toShowCart === 'true' ? 'hidden' : 'visible'
	// }

	return (
		<>
			<header>
				<div className="logo--container">
					{/* add just the name 'Shop.com/ burger menu on mobile/' on pc put logo */}
					{/* <span className="material-icons business--logo">shopping_cart</span> */}
					<h3>Shop.com</h3>
				</div>

				<form onSubmit={props.searchSubmit} className="search--box--container">
					<input
						className="search--product--input"
						type="text"
						placeholder="Search item"
						name="productSearch"
						value={props.productSearchValue}
						onChange={props.handleSearchChange}
					/>

					{/* Search submit button */}
					<button className="search--button">
						<span className="material-icons">search</span>
					</button>
				</form>

				<div className="toggle--buttons">

					{/* home button */}
					<button>
						{/* closes everything and display home page */}
						<span className="material-symbols-outlined" onClick={goHome}>
							home
						</span>
					</button>

					{/* toggles cart */}
					<span onClick={props.superFunction}>
						<button className="cart--button" onClick={showCart}>
							<span
								onClick={() => props.CartScroll(toShowCart)}
								className="material-symbols-outlined"
							>
								shopping_cart
							</span>
						</button>
					</span>

					{/* shows checkout */}
					<span onClick={props.superFunction}>
						<button onClick={showCheckout}>
							<span
								className="material-symbols-outlined"
								onClick={() => props.CheckoutScroll(toShowCheckout)}
							>
								shopping_cart_checkout
							</span>
						</button>
					</span>

					{/* toggles wishlist */}
					<span onClick={props.superFunction}>
						<button className="wishlist--button" onClick={showWishlist}>
							{/* Wishlist */}
							<span
								className="material-icons"
								onClick={() => props.WishlistScroll(toShowWishlist)}
							>
								favorite_border
							</span>
						</button>
					</span>
				</div>

				{/* FOR WISHLIST */}
				{/* FOR THESE 2 THE BEST THING WOULD BE A A WHOLE BOX THAT COVERS MOST OF THE PAGE BUT MUST LEAVING OUT A CHUNK SO YOU CAN STILL SEE THE MAIN PAGE, BOX SHADOW AND Z-INDEX WILL HELP*/}

				{toShowWishlist &&
					(props.wishlistArray.length > 0 ? (
						<>
							{/* <div className="overlay" onClick={showWishlist}></div> */}
							<div className="wishlist">
								<div className="wishlist--header">
									<h2>wishlist</h2>
									<button className="close--button" onClick={showWishlist}>
										<span
											onClick={() => props.WishlistScroll(toShowWishlist)}
											className="material-icons"
										>
											close
										</span>
									</button>
								</div>
								<div className="wishlist--product--list">
									{props.wishlistArray.map((item) => (
										<div
											className="wishlist--product--card action--product--card"
											key={item.productId}
										>
											<div className="wishlist--product--name action--product--name">
												{item.productName}
											</div>

											<div className="wishlist--product--price action--product--extras">
												{item.productPrice}
											</div>
										</div>
									))}
								</div>
							</div>
						</>
					) : (
						<div className="empty--wishlist empty--error">
							<button className="close--button" onClick={showWishlist}>
								<span className="material-icons" 
								onClick={() => props.WishlistScroll(toShowWishlist)}>
									close
								</span>
							</button>

							<div className="empty--wishlist--message empty--list--message">
								Nothing in your Wishlist
							</div>
						</div>
				))}







				{/* FOR CART */}
				{toShowCart &&
					(props.cartArray.length > 0 ? (
						<>
							{/* <div className="overlay" onClick={showCart}></div> */}
							<div className="cart">
								<div className="cart--header">
									<h2>Cart</h2>
									<div>
										<button className="close--button" onClick={showCart}>
											<span
												onClick={() => props.CartScroll(toShowCart)}
												className="material-icons"
											>
												close
											</span>
										</button>
									</div>
								</div>
								<div className="cart--count">{props.cartCount} Items</div>

								<div className="cart--product--list">
									{props.cartArray.map((item) => (
										<div key={item.productId}>
											{/* thin grey line to distinguish between cart items */}

											<div className="cart--product--card action--product--card">
												<div className="cart--product--image--container action--product--card--img--container">
													<img
														src={item.productImage}
														alt="cart product image"
													/>
												</div>
												<div className="cart--product--information action--product--information">
													<div className="cart--product--name action--product--name">
														{item.productName}
													</div>

													<div className="cart--product--price action--product--extras">
														R {item.productPrice}
													</div>

													<div className="cart--product--quantity action--product--extras">
														Items in cart: {item.quantity}
													</div>
												</div>
											</div>
										</div>
									))}
								</div>

								{/* slightly thicker black line to separate cart items and important cart info */}
								{/* <hr /> */}
								<div className="cart--checkout">
									<button onClick={showCheckout} className="checkout--button">
										Checkout
									</button>
								</div>
							</div>
						</>
					) : (
						<div className="empty--cart empty--error">
							<button className="close--button" onClick={showCart}>
								<span className="material-icons"
								onClick={() => props.CartScroll(toShowCart)}>
									close
								</span>
							</button>

							<div className="empty--cart--message empty--list--message">
								<h2>Nothing in your cart</h2>
							</div>
						</div>
					))}





				{toShowCheckout &&
					(props.cartArray.length > 0 ? (
						<div className="checkout">
							<div className="checkout--header">
								<h2>Checkout</h2>
								<button className="close--button" onClick={showCheckout}>
									<span
										className="material-icons"
										onClick={() => props.CheckoutScroll(toShowCheckout)}
									>
										close
									</span>
								</button>
							</div>

							<div className="checkout--product--list">
								{props.cartArray.map((item) => (
									<div key={item.productId}>
										{/* slightly different line to separate things */}
										<hr />

										<div className="checkout--product--card action--product--card">
											<div className="checkout--product--image--container action--product--card--img--container">
												<img
													src={item.productImage}
													alt="checkout product image"
												/>
											</div>
											<div className="checkout--product--information">
												<div className="checkout--product--name action--product--name">
													{item.productName}
												</div>

												<div className="checkout--product--price action--product--extras">
													{item.productPrice}
												</div>

												<div className="checkout--product--quantity action--product--extras">
													Items quantity: {item.quantity}
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
							{/* thinker line */}
							<hr />

							<section className="total--amount--section">
								<div className="display--cart--total">
									<span>Total: ({props.cartCount})</span>
									<span>Checkout Items: {props.cartAmount}</span>
								</div>
							</section>
						</div>
					) : (
						<div className="empty--checkout empty--error">
							<button className="close--button" onClick={showCheckout}>
								<span className="material-icons"
								onClick={() => props.CheckoutScroll(toShowCheckout)}>
									close
								</span>
							</button>

							<div className="empty--checkout--message empty--list--message">
								<h2>Nothing in your checkout</h2>
							</div>
						</div>
					))}
			</header>
		</>
	);
}

// props validation

Header.propTypes = {
	productSearchValue: PropTypes.string.isRequired,
	handleSearchChange: PropTypes.func.isRequired,
	searchSubmit: PropTypes.func.isRequired,

	superFunction: PropTypes.func.isRequired,

	CartScroll: PropTypes.func.isRequired,
	WishlistScroll: PropTypes.func.isRequired,
	CheckoutScroll: PropTypes.func.isRequired,

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
