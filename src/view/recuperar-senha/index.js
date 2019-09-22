
import React, { useState } from 'react';
import './recuperar-senha.css';
import Navbar from '../../components/navbar/';

import firebase from '../../config/firebase';
import 'firebase/auth';

function UsuarioRecuperarSenha() {

    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function recuperarSenha() {
        firebase.auth().sendPasswordResetEmail(email).then(resultado => {
            setMsg('Enviamos um link no seu email para você redefinir sua senha!');
        }).catch(erro => {
            setMsg('Verifique se o email está correto!');
        })
    }

    return (
        <>
            <Navbar />
            <form className="text-center form-login mx-auto mt-5">
                <i class="fas fa-lock-open fa-7x ub"></i>
                <h3 className="mt-3 mb-3 font-weight-bold ub">Recuperar Senha</h3>
                <p className="ub font-weight-bold">Digite o email usado para acesso!</p>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email" />

                <div className="msg my-4 text-center">
                    <span className="ub font-weight-bold">{msg}</span>
                </div>

                <button onClick={recuperarSenha} type="button" className="btn btn-lg btn-block btn-enviar">Enviar</button>
            </form>
        </>
    )
}

export default UsuarioRecuperarSenha;