import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

function Products() {
    const dispatch=useDispatch();
    const [Products,setProducts]=useState([]);
    useEffect(()=>{
        const fetchProducts =async ()=>{
            const res= await fetch("https://fakestoreapi.com/products")
            const data =await res.json();
            setProducts(data)
        };
        fetchProducts()
    },[])
    const handleAdd=(product)=>{
        dispatch(add(product))

    }
  return (
    <div className='productsWrapper'>
      {
        Products.map((product =>(
            <div className='card' key={product.id}>
            <img src={product.image} alt="img not found"/>
            <h4>{product.title}</h4>
            <h5> {product.price} $</h5>
            <button onClick={()=> handleAdd(product)} className='btn'>Add to Cart</button>
            </div>
            
        )))
      }
    </div>
  )
}

export default Products
