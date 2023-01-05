import { ActionTypes } from '../contants/ActionTypes'
// import React from 'react'

export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products,
    };
};

export const selectedProducts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload : product,
    };
};

export const removeselectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};
