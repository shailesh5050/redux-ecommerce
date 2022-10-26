import React from 'react'
import ProductList from './ProductList'
import { useState,useEffect } from 'react';
import axios from 'axios';
const Products = () => {
  const [data,setData] = useState([]);
  async function fetchProducts() {
      const {data} = await axios.get('http://localhost:1337/api/products?populate=%2A');
      setData(data.data);
     
  }
  useEffect(() => {

      fetchProducts();
  }, [])
  return (
    <>
    
    <div className='container'>
    <div className="row">
    { data.map((product)=>{
        return <div className='col col-lg-4 col-md-6 col-sm-6 col-xs-12 mt-5 mb-2' key={product.id}>
          <ProductList  product={product}/> 
        </div>
      })}
    </div>
    </div>


    </>
  )
}

export default Products