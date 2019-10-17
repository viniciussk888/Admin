import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import {store,persistor} from '../src/store/';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

/* PAGINAS   */
import Login from './view/login/'
import NovoUsuario from './view/usuario-novo/'
import Home from './view/home/'
import UsuarioRecuperarSenha from './view/recuperar-senha/'
import CadastroQuestao from './view/cadastro-questao/'
import ListarQuestoes from './view/lista-questoes/'
import AtualizaQuestoes from './view/atualizar-questao/'
import AtualizarUsuario from './view/gerenciar-usuario/'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/novousuario' component={NovoUsuario} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/recuperarsenha' component={UsuarioRecuperarSenha} />
      <Route exact path='/cadastroquestao' component={CadastroQuestao} />
      <Route exact path='/listarquestao' component={ListarQuestoes} />
      <Route exact path='/atulizarquestao' component={AtualizaQuestoes} />
      <Route exact path='/gerenciarusuario' component={AtualizarUsuario} />
    </Router>
    </PersistGate>
    </Provider>
  );
}

export default App;
