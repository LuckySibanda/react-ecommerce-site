import React from "react"
import MainBody from "./components/Main-products"
import { products } from "./products"

export default function App() {

    const [productsData, setProductsData] = React.useState(products)

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

    const productGrid = products.map(product => {
        <MainBody 
            key={product.id}
            name={product.name}
            image={product.image}
            priceCents={product.priceCents}
        />
    })

    // map each product to the product component, this will pass the data
    // as props, for the cart will check if an id is in the cart if not
    // add, this will be done with a click function in each product button

    return (
        <main>
            {productGrid}
        </main>
    )
}