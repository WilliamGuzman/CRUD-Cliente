import clienteAxios from './axios';

const tokenAuth = token => {
    if (token) {
        //Pasamos al Header el token
        clienteAxios.defaults.headers.common['Authorization'] = token;
    }else {
        //Si se cerro sesion o expori el token see elimina
        delete clienteAxios.defaults.headers.common['Authorization'];
    }
}

export default tokenAuth;