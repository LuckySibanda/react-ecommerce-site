import React from "react"
import MainBody from "./componets/Main-products"
import { products } from "./products"

export default function App() {

    const [productsData, setProductsData] = React.useState(products)

    // console.log(productsData)

    // const [product, setProduct] = React.useState({
    //     id: "",
    //     image: "",
    //     name: "",
    //     rating: 0,
    //     priceCents: 0,
    //     keywords: []
    // })

    // setProductsData(productsData.map((item) => {
    //     setProduct()
    // }))


    // map each product to the product component, this will pass the data
    // as props, for the cart will check if an id is in the cart if not
    // add, this will be done with a click function in each product button


    // check if the product

    // const [cartItem, setCartItem] = React.useState({
    //     id: "",
    //     name: ""
    // })

    const [cart, setCart] = React.useState([])
    const [cartCount, setCartCounter] = React.useState(0)

    function addToCart(id, name) {
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
    }

    // console.log(cartCount)
    // console.log(cart)
    console.log('rendered')

    const productGrid = productsData.map(item => (
        <MainBody 
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            priceCents={item.priceCents}
            handleClick={addToCart}
            />
    ))

    return (
        <main>
            {productGrid}
        </main>
    )
}