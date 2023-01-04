import React from 'react'
import { ActionTypes } from '../contants/ActionTypes';


const initialState = {
    products: 
    [
        {
            id: 1,
            title: 'Dipesh',
            category: 'programmer'
        },
    ],
};

export const ProductReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
        return state;
        break;
  
    default:
        return state;
  };
};

export default ProductReducer
