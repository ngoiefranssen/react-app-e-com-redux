import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProducts } from '../redux/actions/ProductActions';

const ProductDatail = () => {

  const product = useSelector((state) => state.product);
  const{productId} = useParams();
  const dispatch = useDispatch();

  

  useEffect(() =>{
    if(productId && productId !== '')
    {
      const fetchProductDetail = async () =>{
        const res = await axios
          .get(`https://fakestoreapi.com/products/${productId}`)
          .catch((error) =>{
            console.log('Error', error);
          });
        dispatch(selectedProducts(res.data));
      };
    }
  });
  return (
    <div className='ui grid container'>
      {
        Object.keys(product).length === 0 ?(
          <div>Loading......</div>
        ) : (
              <div className='ui placeholder segment'>
                <div className='ui two column stackable center aligned grid'>
                  <div className='ui vertical divider'>And</div>
                  <div className='middle aligned row'>
                    <div className='column 1p'>
                      <img className='ui fluid image' src={image}/>
                    </div>
                    <div className='column rp'>
                      <h1>{title}</h1>
                      <h2>
                        <a className='ui teal tag label' href="#">${price}</a>
                      </h2>
                      <h3 className='ui brown block header'>{category}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              </div>
        )
      }
    </div>
  );
};

export default ProductDatail;