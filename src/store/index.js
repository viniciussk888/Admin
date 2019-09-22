//REDUX USADO PARA SALVAR ESTADO DO USUARIO
import { createStore } from 'redux';
import usuarioReducer from './usuarioReducer';

const store = createStore(usuarioReducer);

export default store;