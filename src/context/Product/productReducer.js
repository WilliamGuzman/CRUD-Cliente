import {
  GET_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  SELECT_PRODUCT,
  DELETE_PRODUCT,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };

    case CREATE_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products],
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.key === action.payload.key ? action.payload : product
        ),
      };
    case SELECT_PRODUCT:
      return {
        ...state,
        product: state.products.filter(
          (product) => product.id === action.payload
        ), 
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
        product: null,
        res: true
      };

    default:
      return state;
  }
};
