import React from 'react';
import './login.css';

function Login(){
    return(
        <div className="login-content d-flex align-items-center">
        <form className="form-signin mx-auto">
        <div className="text-center mb-4">
          <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
          <h1 className="h3 mb-3 font-weight-normal ub font-weight-bold">Login</h1>
          <p className="ub font-weight-bold">Painel de Gerenciamento de Questoes</p>
        </div>
      
        <div className="form-label-group">
          <input type="email" id="inputEmail" class="form-control my-2" placeholder="Email"/>
        </div>
      
        <div class="form-label-group">
          <input type="password" id="inputPassword" class="form-control my-2" placeholder="Senha"/>
        </div>

        <button className="btn btn-lg btn-primary btn-block btn-login" type="submit">Entrar</button>

        <div className="msg-login text-center my-5 ub">
            <span><strong>WOW! </strong> Voce esta conectado! &#128526;</span>
            <br/>
            <span><strong>Ops! </strong> Verifique se o usuario ou senha esta correto! &#128549;</span>
        </div>

        <div className="op-login mt-3 text-center">
        <a href="#" className="mx-2 font-weight-bold">Recuperar Senha</a>
        <a href="#" className="mx-2 font-weight-bold">Criar Acesso Admin</a>
        </div>
        <p className="mt-5 mb-3 text-muted text-center font-weight-bold">Unibalsas &copy; 2019</p>
      </form>
      </div>
    )
}
export default Login;