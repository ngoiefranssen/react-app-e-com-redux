import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProducts } from '../redux/actions/ProductActions';

const ProductDatail = () => {

  const product = useSelector((state) => state.product)
  const{productId} = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () =>{
    const res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) =>{
        console.log('Error', error);
      });
    dispatch(selectedProducts(res.data));
  };
  return (
    <div></div>
  );
};

export default ProductDatail;