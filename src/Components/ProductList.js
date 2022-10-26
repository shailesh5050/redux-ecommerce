import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react'
import Products from './Products'
import '../card.css';
const ProductList = ({product}) => {
  const url='http://localhost:1337';
   const {title,price,description} = product.attributes;
    //get medium image from product image array
    const image=url+product.attributes.image.data.attributes.formats.small.url;

   
   
   
   
  return (
    <>
        
        <div className="product">
        <span className="product__price">₹{price}</span>
        <img alt={title} className="product__image" src={image} />
        <h1 className="product__title">{title}</h1>
      <hr />
        <p>{description} </p>
        <button  className="product__btn btn">Add To Cart</button>
      </div>
      
    </>
  )
}

export default ProductList