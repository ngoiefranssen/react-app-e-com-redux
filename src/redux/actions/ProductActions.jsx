import { ActionTypes } from '../contants/ActionTypes'
import React from 'react'

const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products,
    };
};

const selectedPrduts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload : product,
    };
};
