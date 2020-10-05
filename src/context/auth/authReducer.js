import { LOGIN_EXITOSO, LOGIN_ERROR, LOG_OUT } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_EXITOSO: {
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        autenticado: true,
        mensaje: null,
        cargando: false,
      };
    }

    case LOG_OUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        usuario: null,
        autenticado: null,
        mensaje: action.payload,
        cargando: false,
      };

    case LOGIN_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
      };

    default:
      return state;
  }
};
