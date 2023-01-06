import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/ProductActions';
import ProductComponent from './ProductComponent'

const ProductListing = () => {

  const products = useSelector((state) => state);
  console.log(products);
  const dispatch = useDispatch()

  useEffect(() =>{
    const fetchProducts = async () =>{
      const res = await axios
        .get('https://fakestoreapi.com/products')
        .catch((error) => {
          console.log('Error', error)
        })
      dispatch(setProducts(res.data));
    };
    fetchProducts();
  },[]);
  
  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}

export default ProductListing;