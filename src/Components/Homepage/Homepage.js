import axios from 'axios';
import React from 'react'
import Product from '../Product/Product';
import './Homepage.css'; 

function Homepage() {

    //create state for product info
    //uses const variable [data, function name beginning with set] = React.useState([array here])
   const [products, setProducts] = React.useState([]);

    //create a function to get the products
    const fetchProducts = () => {
        //get the data from the api
        //store in the products
        axios.get("https://fakestoreapi.com/products")
        .then (response => {
            //console.log(response.data));
            //assign the data to the products
            setProducts(response.data);
        })}
        console.log("fetch"); 
    
  return (
    <div>
        <button onClick = {fetchProducts}>Fetch Products</button>
        <div className='prod-container'>
            {products.map(item => {
                return <Product key = {item.id} /*add this to get rid of warning*/
                                title = {item.title} 
                                price = {item.price}
                                category = {item.category}
                                image = {item.image} />
        })}
        </div>
    </div>
  )
}


/*{
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
        }*/
export default Homepage