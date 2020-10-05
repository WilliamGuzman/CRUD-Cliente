import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import {
  LOGIN_EXITOSO,
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //Funciones

  //Retorna el usuario autenticado
  const usuarioAutenticado = async () => {
    const token = localStorage.getItem('token');
    if (token) {
        //TODO: Función para enviar el token por headers
        tokenAuth(token);
    }
}

  //Cuando el usuario inicia sesion
  const login = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/oauth", datos);
      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data,
      });

      //Obtener usuario
      usuarioAutenticado();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <authContext.Provider
      value={
        {
          //State
          token: localStorage.getItem("token"),
          autenticado: state.autenticado,
          usuario: state.usuario,
          mensaje: state.mensaje,
          //Funciones
          login
        }
      }
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
