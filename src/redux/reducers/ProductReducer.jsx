import { ActionTypes } from '../contants/ActionTypes';

const initialState = {
    products: [],
};

const ProductReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
        return { ...state, products:payload };
    default:
        return state;
  };
};

export default ProductReducer;

export const selectedProductReducer = (state = {}, { type, payload }) =>{
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {};
    default:
      return state;
  };
};