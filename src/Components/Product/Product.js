import React from 'react'
//use only a ./ below since the css is in the same folder
import './Product.css'; 

function Product(props) {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.price}</p>
        <p>{props.category}</p>
        <img className= "product-img" src= {props.image} alt= {props.title}/>
    </div>
  )
}

export default Product