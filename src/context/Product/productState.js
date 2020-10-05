import React, { useReducer } from "react";

import productContext from "./productContext";
import productReducer from "./productReducer";
import Swal from "sweetalert2";

import clienteAxios from "../../config/axios";

import {
  GET_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  SELECT_PRODUCT,
  DELETE_PRODUCT,
} from "../../types";

const ProductState = (props) => {
  const initialState = {
    products: [],
    product: null,
    res: null
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  //Agregar nuevo proyecto
  const createProduct = async (product) => {
    try {
      const resultado = await clienteAxios.post("/products", product);
      dispatch({
        type: CREATE_PRODUCT,
        payload: resultado.data,
      });
      Swal.fire(
        'Registrado!',
        'El producto ha sido registrado con exito',
        'success'
      )
      
    } catch (error) {
      console.log(error);
    }
  };

  //Obtener los productos
  const getProduct = async () => {
    try {
      const resultado = await clienteAxios.get("/products");
      dispatch({
        type: GET_PRODUCT,
        payload: resultado.data
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Actualizar producto
  const updateProduct = async (product) => {
    try {
      const resultado = await clienteAxios.put(
        `/products/${product.id}`,
        product
      );
      dispatch({
        type: UPDATE_PRODUCT,
        payload: resultado.data,
      });
      Swal.fire(
        'Actualizado!',
        'El producto ha sido actualizado con exito',
        'success'
      )
    } catch (error) {
      console.log(error);
    }
  };

  //Seleccionar producto
  const selectProduct = productId => {
    dispatch({
      type: SELECT_PRODUCT,
      payload: productId
    })
  }

  //Eliminar producto
  const deleteProduct = async (productId) => {
    try {
      await clienteAxios.delete(`/products/${productId}`);
      dispatch({
        type: DELETE_PRODUCT,
        payload: productId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <productContext.Provider
      value={{
        //State
        products: state.products,
        product: state.product,
        res: state.res,
        //Functions
        getProduct,
        createProduct,
        updateProduct,
        selectProduct,
        deleteProduct,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
