import React from "react"
import MainBody from "./componets/Main-products"
import { products } from "./products"
import Header from "./componets/Header"
import Banner from "./Banner"
import SearchResults from "./SearchedItems"
import ProductPage from "./componets/Product-page"
import Footer from "./componets/Footer"

export default function App() {
    
    const productsData = products

    const [cart, setCart] = React.useState([])

    const [cartCount, setCartCounter] = React.useState(0)

    const [cartAmount, setCartAmount] = React.useState(0)

    const [wishlist, setWishlist] = React.useState([])

    const [productToShow, setProductToShow] = React.useState({
        prodName: "",
        prodImage: "",
        prodPrice: 0,
        prodId: "",
        prodRating: 0,
        prodStarsImage: ""
    })

    const [showProductPageBool, setShowProduct] = React.useState(false)

    // Function showing clicked on product
    function showProd(name, image, priceCents, id, ratingCount, ratingStars) {
        setProductToShow({
            prodName: name,
            prodImage: image,
            prodPrice: priceCents,
            prodId: id,
            prodRating: ratingCount,
            prodStarsImage: ratingStars
        })
        setShowProduct(true)
    }


    // Add to cart function
    function addToCart(id, name, priceCents, image) {
        let matchingItem;

        cart.map(item => {
            if(id === item.productId) {
                matchingItem = item;
            }
            }
        )

        if(matchingItem) {
            matchingItem.quantity += 1;
        }

        else {
            setCart(prevCart => [{
                productId:id, 
                quantity: 1, 
                productName: name, 
                productPrice: priceCents,
                productImage: image
                }, ...prevCart])
        }

        setCartCounter(prevCount => prevCount + 1)

        setCartAmount(prevAmount => prevAmount + priceCents)
    }


    
    // Add to wishlist function
    function addToWishlist(id, name, priceCents, image) {
        let matchingItem = wishlist.find(item => item.productId === id);
    
        if (matchingItem) {
            // Item already in wishlist, remove it
            setWishlist(prevWishlist => prevWishlist.filter(item => item.productId !== id));
        } else {
            // Item not in wishlist, add it
            setWishlist(prevWishlist => [
                ...prevWishlist,
                {
                    productId: id,
                    productName: name,
                    productPrice: priceCents,
                    productImage: image,
                },
            ]);
        }
    }




    
    // Stores input search value
    const [searchValue, setSearchValue] = React.useState({
        productSearch: ''
    })




    // handle search value
    function handleChange(event) {
        const {name, value} = event.target

        setSearchValue(prevState => ({
            ...prevState,
            [name]: value
        }))
    }



    // Check if search is clicked
    const [submitted, setSubmitted] = React.useState(false)




    // Function to handle form submit / search button click
    function formSubmit(event) {
        event.preventDefault()

        // console.log(searchValue)
        setSubmitted(true)
        showSearchResults()
    }



    // Array to store result of searched function
    const [searchResult, setSearchResult] = React.useState([])




    // Function to search an array of product objects and get ones that meet the search
    function showSearchResults() {
        let searchItems = []
        productsData.map(item => {
            if(item.keywords.includes(searchValue.productSearch)) {
                searchItems.push(item)
                setSearchResult(searchItems)
                
            }
        })

        if (searchItems.length === 0) {
            console.log("nothing here")
        }
    }




    // Map items in searchArray to component to be displayed
    const searchGrid = searchResult.map(item => (
        <SearchResults

            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            priceCents={item.priceCents /10}

            ratingCount={item.rating.count}
            ratingStars={`./ratings/rating-${item.rating.stars * 10}.png`}

            handleClick={addToCart}
            wishlistClick={addToWishlist}

            handleProductClick={showProd}

            CartScroll={CartStopScroll}
            superFunction={superFunc}
        />
    ))

    // Maps products to the main product grid
    const productGrid = productsData.map(item => (
        <MainBody 
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            priceCents={item.priceCents}

            ratingCount={item.rating.count}
            ratingStars={`./ratings/rating-${item.rating.stars * 10}.png`}

            handleClick={addToCart}
            wishlistClick={addToWishlist}
            handleProductClick={showProd}

            CartScroll={CartStopScroll}
            superFunction={superFunc}
            />
    ))

    // determines whether to show product--grid when cart is toggled on
    const [CartScroll, setCartScroll] = React.useState(true)
    const [WishlistScroll, setWishlistScroll] = React.useState(true)
    const [CheckoutScroll, setCheckoutScroll] = React.useState(true)

    // const [productPageScroll, setProductPageScroll] = React.useState(true)

    // RIGHT THIS IS HOW THIS WORKS, WHEN FOR EXAMPLE THE CART IS TOGGLED ON, THE ONCLICK PASSES THE INITIAL STATE
    // OF FALSE NOT TRUE, THE STATE IS ONLY FLIPPED TO TRUE WHEN showCart IS CALLED.
    // HERE CartScroll IS INITIALLY TRUE WHICH MEANS THE PRODUCT--GRID IS RENDERED UNTIL YOUR TOGGLE THE CART WHICH RUNS
    // CartStopScroll THAT FLIPS CartScroll TO FALSE AND PRODUCT--GRID IS UNMOUNTED/NOT SHOWN
    // superFunc TOGGLES ALL TRUE VALUES TO FALSE SO THAT IT DOESNT MATTER WHICH FEATURE IS TOGGLED ON, PRODUCT--GRID
    // IS UNMOUNTED EITHER WAY.

    // Mounts product--grid on to the display
    function prodScroll() {
        setCartScroll(true)
        console.log(`prod is ${CartScroll}`)
    }

    function CartStopScroll(toShowCart) {
        setCartScroll(toShowCart)
    }

    function WishlistStopScroll(toShowWishlist) {
        setWishlistScroll(toShowWishlist)
    }

    function CheckoutStopScroll(toShowCheckout) {
        setCheckoutScroll(toShowCheckout)
    }

    
    function superFunc() {
        CartStopScroll()
        WishlistStopScroll()
        CheckoutStopScroll()
    }
    

    return (
        <main>
            {/* Header Component */}
            <Header
                productSearchValue={searchValue.productSearch}
                // passing 2 arrays as props to the header component
                cartArray={cart}
                wishlistArray={wishlist}

                cartAmount={cartAmount}
                cartCount={cartCount}
                handleSearchChange={handleChange}
                searchSubmit={formSubmit}
                
                superFunction={superFunc}
                CartScroll={CartStopScroll}
                HomeScroll={prodScroll}

                WishlistScroll={WishlistStopScroll}
                CheckoutScroll={CheckoutStopScroll}
                />

            {/* If product is clicked show clicked product */}
            {showProductPageBool && (
                <ProductPage 
                    prodName={productToShow.prodName}
                    prodImage={productToShow.prodImage}
                    prodPrice={productToShow.prodPrice}
                    prodId={productToShow.prodId}
                    showProd={setShowProduct}

                    ratingCount={productToShow.prodRating}
                    ratingStars={productToShow.prodStarsImage}

                    handleClick={addToCart}
                    wishlistClick={addToWishlist}

                    CartScroll={prodScroll}
            />)}


            {submitted === true ? ((CartScroll || WishlistScroll || CheckoutScroll) ? (
            <>
                <button className="close--button end--search--button" onClick={() => setSubmitted(false)}>End search
                <span className="material-symbols-rounded">close</span>
                </button>
                <div className="product--grid">
                {searchGrid}
                </div>
            </>
            ) : (<div className="overlay"></div>)
            ) : (
            (CartScroll || WishlistScroll || CheckoutScroll) ? (
                <>
                    <Banner />
                    <section className="product--grid">
                    {productGrid}
                    </section>
                </>
            ) : (<div className="overlay"></div>)
            )}

            <Footer />
        </main>
    )
}