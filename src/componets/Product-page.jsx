import PropTypes from "prop-types";

export default function ProductPage(props) {

    const price = (props.prodPrice / 10).toFixed(2)

    const sale = ((props.prodPrice / 10) * 0.5).toFixed(2)

    return (
        <>
            <div className="overlay"></div>
            <div className="product--page">

                <div className="product--page--header">

                    <div className="logo--container">
                        <h5>CASH SPLASH</h5>
                    </div>

                    <div>
                        <button className="close--button" onClick={() => props.showProd(false)}>
                            <span
                                onClick={props.CartScroll}
                                className="material-symbols-rounded"
                            >
                                close
                            </span>
                        </button>
                    </div>
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
                                <span className="material-symbols-rounded wishlist-icon">
                                    favorite
                                </span>
                            </button>
                        </div>

                        <p>
                        Introducing the ultimate marvel of modern consumerism - our Generic Product! Crafted with the finest blend of mediocrity and unremarkable design, this product is the epitome of Meh. Imagine a world where excitement goes to die, and thats where our Generic Product shines. With a design so unassuming, its practically invisible in your daily life. It neither soars to great heights nor plummets to the depths of disappointment. Its the Goldilocks of products, just bland enough to be forgettable. So, why settle for uniqueness or innovation when you can bask in the glory of averageness with our Generic Product? Its the kind of purchase that makes you question your life choices but hey, at least it comes in a box!
                        </p>

                        <div className="product--page--prod--info">
                            <div className="product--page--price">
                                <span style={{ textDecoration: 'line-through' }}>R {price}</span>
                                <span>   R {sale}</span>
                            </div>

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
        </>
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

    CartScroll: PropTypes.func.isRequired,
};