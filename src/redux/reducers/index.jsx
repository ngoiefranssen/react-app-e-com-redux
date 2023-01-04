import {combineReducers}  from 'react-redux'
import ProductReducer from "./ProductReducer";

const index = combineReducers({
    allProducts: ProductReducer,
});