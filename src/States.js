import { pushStateLocationPlugin } from "@uirouter/react";
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import NewAccount from './components/Auth/NewAccount';
import Product from './components/Product/Product';
import EditProduct from './components/Product/EditProduct';
import Contenedor from './Contenedor';

const states = [
  {
    name : 'contenedor',
    component : Contenedor
  },
  {
    name : 'login',
    url  : '/',
    component : Login
  },
  {
    name : 'newAccount',
    url  : '/nueva-cuenta',
    component : NewAccount
  },
  {
    name : 'contenedor.home',
    url  : '/home',
    component : Home
  },
  {
    name : 'contenedor.product',
    url  : '/nuevo-producto',
    component : Product
  },
  {
    name : 'contenedor.editproduct',
    url  : '/editar-producto/:id',
    component : EditProduct
  }
]

const plugins = [pushStateLocationPlugin];

export {states, plugins};