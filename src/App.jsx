import React from "react"
import MainBody from "./componets/Main-products"
import { products } from "./products"
import Header from "./componets/Header"
// import Cart from "./componets/Cart"

export default function App() {

    const [productsData, setProductsData] = React.useState(products)


    // map each product to the product component, this will pass the data
    // as props, for the cart will check if an id is in the cart if not
    // add, this will be done with a click function in each product button

    const [cart, setCart] = React.useState([])
    const [cartCount, setCartCounter] = React.useState(0)
    const [cartAmount, setCartAmount] = React.useState(0)

    function addToCart(id, name, priceCents) {
        // console.log(id)
        let matchingItem;

        cart.map(item => {
            if(id === item.productId) {
                matchingItem = item;
            }
            }
        )

        // setCart(prevCart => prevCart.map(item => {
        //     if(id === item.productId) {
        //         matchingItem = item;
        //     }
        // }))

        if(matchingItem) {
            matchingItem.quantity += 1;
        }

        else {
            setCart(prevCart => [{productId:id, quantity: 1, productName: name}, ...prevCart])
        }

        setCartCounter(prevCount => prevCount + 1)

        setCartAmount(prevAmount => prevAmount + priceCents)
    }

    // console.log(cartCount)
    // console.log(typeof(cart))
    // console.log(cartAmount)

    const productGrid = productsData.map(item => (
        <MainBody 
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            priceCents={item.priceCents /10}
            handleClick={addToCart}
            />
    ))

    return (
        <main>
            <Header
                cartArray={cart}
                cartAmount={cartAmount}
                cartCount={cartCount}
                // carty={cartColumn}
                />
            {/* {cart} */}
            <section className="product--grid">
                {productGrid}
            </section>

            
        </main>
    )
}