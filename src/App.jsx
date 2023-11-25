import React from "react"
import MainBody from "./componets/Main-products"
import { products } from "./products"
import Header from "./componets/Header"
import SearchResults from "./SearchedItems"
import ProductPage from "./componets/Product-page"
// import Checkout from "./componets/Checkout"
// import Categories from "./componets/Categories"

export default function App() {

    // const [productsData, setProductsData] = React.useState(products)

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
        prodRating: 0
    })

    const [showProductPageBool, setShowProduct] = React.useState(false)

    function showProd(name, image, priceCents, id, ratingCount) {
        setProductToShow({
            prodName: name,
            prodImage: image,
            prodPrice: priceCents,
            prodId: id,
            prodRating: ratingCount
        })
        setShowProduct(true)
    }

    // const [product, setProduct] = React.useState({
    //     productName: "",
    //     productPrice: 0,
    //     productImage: ""
        
    // })

    // const [showProductPage, setShowProduct] = React.useState(false)

    // function showProduct(name, priceCents, image) {
    //     setProduct({
    //         productName: name,
    //         productPrice: priceCents,
    //         productImage: image

            
            
    //     })
    //     // console.log(name, priceCents, image, 'func')

    //     setShowProduct(true)
    // }
    // // console.log(product)

    // // console.log(showProductPage)

    // Add to cart function
    function addToCart(id, name, priceCents, image) {
        // console.log(id)
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
        // console.log(id)
        let matchingItem;

        wishlist.map(item => {
            if(id === item.productId) {
                matchingItem = item;
            }
            }
        )

        if(matchingItem) {
            // matchingItem.quantity += 1;
            console.log("item already in wishlist")
        }

        else {
            setWishlist(prevWishlist => [{
                productId:id, 
                productName: name, 
                productPrice: priceCents,
                productImage: image
                }, ...prevWishlist])
        }
    }





    // Maps products to the main product grid
    const productGrid = productsData.map(item => (
        <MainBody 
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            priceCents={item.priceCents}

            ratingCount={item.rating.count}
            // ratingStars={`./rating-${item.rating.stars} * 10.png`}
            // passes the 2 add functions as props to each product card
            handleClick={addToCart}
            wishlistClick={addToWishlist}
            handleProductClick={showProd}
            />
    ))

    // console.log(`./rating-${productsData.rating.stars *  10}.png`)
    // console.log(productsData.rating)



    
    // Stores product search value
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



    // boolean for searching products
    const [submitted, setSubmitted] = React.useState(false)




    // Function to handle form submit or search button click
    function formSubmit(event) {
        event.preventDefault()

        // console.log(searchValue)
        setSubmitted(true)
        showSearchResults()
    }



    // Array to store result of searched function
    const [searchResult, setSearchResult] = React.useState([])




    //  Function to search an array of product objects and get ones that meet the search
    function showSearchResults() {
        let searchItems = []
        productsData.map(item => {
            if(item.keywords.includes(searchValue.productSearch)) {
            // if(item.keywords.includes('kitchen')) {
                searchItems.push(item)
                setSearchResult(searchItems)
                
            }

            // else if(kitchen ) {
            //     searchItems.push(item)
            //     setSearchResult(searchItems)
            // }
        })

        if (searchItems.length === 0) {
            console.log("nothing here")
            // <div>
            //     Nothing here
            // </div>
        }
    }




    // Map items in searchArray to component to be grided
    const searchGrid = searchResult.map(item => (
        <SearchResults

            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            priceCents={item.priceCents /10}
            // passes the 2 add functions to each product card
            handleClick={addToCart}
            wishlistClick={addToWishlist}

            handleProductClick={showProd}
        />
    ))

    // const [doCheckout, setDoCheckout] = React.useState(false)

    // finally the return, puts everything on the page
    return (
        <main>
            <Header
                productSearchValue={searchValue.productSearch}
                // passing 2 arrays as props to the header component
                cartArray={cart}
                wishlistArray={wishlist}

                cartAmount={cartAmount}
                cartCount={cartCount}
                handleSearchChange={handleChange}
                searchSubmit={formSubmit}
                // showCheckout={setDoCheckout}
                />

            {/* <Categories
            handleClick={formSubmit}
            /> */}

            {/* {doCheckout && (
                <Checkout 
                    cartArray={cart}
                />
            )} */}

            {showProductPageBool && (
                <ProductPage 
                // key={productToShow.prodId}
                prodName={productToShow.prodName}
                prodImage={productToShow.prodImage}
                prodPrice={productToShow.prodPrice}
                showProd={setShowProduct}

                ratingCount={productToShow.prodRating}

                handleClick={addToCart}
                prodId={productToShow.prodId}
                />
            )}

            
            {submitted === true ? (
                <>
                    <button className="close--button end--search--button" onClick={()=>setSubmitted(false)}>
                        <span className="material-icons">close</span>
                    </button>
                    <div className="product--grid">
                        
                        {searchGrid}
                    </div> 
                </>
            ) : (
                <section className="product--grid">
                    {productGrid}
                </section>
            )}

            
            
        </main>
    )
}


// {submitted === true ? 
//     <div className="product--grid">
//         <button onClick={()=>setSubmitted(false)}>End Search</button>
//         {searchGrid}
//     </div> 
//     : 
//     <section className="product--grid">
//         {productGrid}
//     </section>}

//     {searchResult.length === 0 ? 
//         <div>
//             Nothing here
//         </div>
//     :
    


//     submitted === true ? 
//     <div className="product--grid">
//         <button onClick={()=>setSubmitted(false)}>End Search</button>
//         {searchGrid}
//     </div> 
//     : 
//     <section className="product--grid">
//         {productGrid}
//     </section>
//     }