import React from "react";
import { UIRouter, UIView } from "@uirouter/react";
import { plugins, states } from "./States";

//Context
import ProductState from "./context/Product/productState";
import AuthState from "./context/auth/authState";

//Importamos el token
import tokenAuth from './config/token';

//Revisar si tenemos un token
const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}

function App() {

  return (
    <ProductState>
      <AuthState>
        <UIRouter plugins={plugins} states={states}>
          <UIView />
        </UIRouter>
      </AuthState>
    </ProductState>
  );
}

export default App;
