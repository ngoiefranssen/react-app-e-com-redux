import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";

const index = combineReducers({
    allProducts: ProductReducer,
});