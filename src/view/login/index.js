import React, { useState } from 'react';
import './login.css';
import { Link, Redirect } from 'react-router-dom';
import Navbar from '../../components/navbar/';

import { useSelector, useDispatch } from 'react-redux';

//Firebase imports
import firebase from '../../config/firebase';
import 'firebase/auth';

function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();

  const dispatch = useDispatch();

  function logar() {
    firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
      setMsgTipo('sucesso');
      setTimeout(() => {
        dispatch({ type: 'LOG_IN', usuarioEmail: email });
      },2000);
      
    }).catch(erro => {
      setMsgTipo('erro');
    });
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="login-content d-flex align-items-center">

      {useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null}

        <form className="form-signin mx-auto">
          <div className="text-center mb-4">
            <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal ub font-weight-bold">Login</h1>
            <p className="ub font-weight-bold">Painel de Gerenciamento de Questoes</p>
          </div>

          <div className="form-label-group">
            <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />
          </div>

          <div class="form-label-group">
            <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />
          </div>

          <button onClick={logar} className="btn btn-lg btn-primary btn-block btn-login" type="button">Entrar</button>

          <div className="msg-login text-center my-5 ub">
            {msgTipo === 'sucesso' && <span><strong>WOW! </strong> Voce esta conectado! &#128526;</span>}
            {msgTipo === 'erro' && <span><strong>Ops! </strong> Verifique se o usuario ou senha esta correto! &#128549;</span>}

          </div>

          <div className="op-login mt-3 text-center">
            <Link to className="mx-2 font-weight-bold">Recuperar Senha</Link>
            <Link to='novousuario' className="mx-2 font-weight-bold">Criar Acesso Admin</Link>
          </div>
          <p className="mt-5 mb-3 text-muted text-center font-weight-bold">Unibalsas &copy; 2019</p>
        </form>
      </div>
    </>
  )
}
export default Login;