import React from "react"
import MainBody from "./componets/Main-products"
import { products } from "./products"
import Header from "./componets/Header"
import SearchResults from "./SearchedItems"
// import Cart from "./componets/Cart"

export default function App() {

    const [productsData, setProductsData] = React.useState(products)

    const [cart, setCart] = React.useState([])

    const [cartCount, setCartCounter] = React.useState(0)

    const [cartAmount, setCartAmount] = React.useState(0)

    const [wishlist, setWishlist] = React.useState([])

    const [product, setProduct] = React.useState()

    function showProduct() {
        console.log('not needed')
    }

    // Add to cart function
    function addToCart(id, name, priceCents) {
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
                productPrice: priceCents
                }, ...prevCart])
        }

        setCartCounter(prevCount => prevCount + 1)

        setCartAmount(prevAmount => prevAmount + priceCents)
    }




    
    // Add to wishlist function
    function addToWishlist(id, name, priceCents) {
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
                productPrice: priceCents
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
            priceCents={item.priceCents /10}
            // passes the 2 add functions as props to each product card
            handleClick={addToCart}
            wishlistClick={addToWishlist}
            handleProductClick={showProduct}
            />
    ))



    
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
                searchItems.push(item)
                setSearchResult(searchItems)
                
            }
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

            handleProductClick={showProduct}
        />
    ))



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
                />

            {submitted === true ? 
            <div className="product--grid">
                <button onClick={()=>setSubmitted(false)}>End Search</button>
                {searchGrid}
            </div> 
            : 
            <section className="product--grid">
                {productGrid}
            </section>}
            
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