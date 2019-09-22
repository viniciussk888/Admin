import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import store from '../src/store/';
import {Provider} from 'react-redux';

/* PAGINAS   */
import Login from './view/login/'
import NovoUsuario from './view/usuario-novo/'
import Home from './view/home/'
import UsuarioRecuperarSenha from './view/recuperar-senha/'
import CadastroQuestao from './view/cadastro-questao/'

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/novousuario' component={NovoUsuario} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/recuperarsenha' component={UsuarioRecuperarSenha} />
      <Route exact path='/cadastroquestao' component={CadastroQuestao} />
    </Router>
    </Provider>
  );
}

export default App;
