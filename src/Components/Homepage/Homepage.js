import React from 'react'
import Product from '../Product/Product';


function Homepage() {

    //create state for product info
    const [products, setProducts] = React.useState([
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
            "rate": 3.9,
            "count": 120 }
        }
        ,
        {
            "id": 2,
            "title": "JanSport",
            "price": 49.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "accessories",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
            "rate": 3.9,
            "count": 120
            }
        }
    ]);

    //create a function to get the products
    const fetchProducts = () => {
        console.log("fetch");
    }
  return (
    <div>
        <button onClick = {fetchProducts}>Fetch Products</button>
        {products.map(item => {
            return <Product key = {item.id}
                            title = {item.title} 
                            price = {item.price}
                            category = {item.category}
                            image = {item.image} />
        })}
    </div>
  )
}

export default Homepage