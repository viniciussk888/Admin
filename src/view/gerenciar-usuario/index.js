import React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';
import Navbar from '../../components/navbar/';
import './gerenciar-usuario.css';

function AtualizarUsuario() {

    const [nome, setNome] = useState();
    const [codProf, setCod] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [senha2, setSenha2] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] = useState();

    const db = firebase.firestore();

    

    return (
        <>
            <Navbar></Navbar>
            <div className="form-cadastro">
                <form className="text-center form-login mx-auto mt-5">
                    <div className="text-center mb-4">
                        <i class="fas fa-user-plus fa-7x ub"></i>
                        <p className="ub font-weight-bold mt-3">Alterar Dados</p>
                    </div>
                    <input onChange={(e) => setNome(e.target.value)} type="text" className="form-control my-2" placeholder="Nome" />
                    <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Senha" />
                    <input onChange={(e) => setSenha2(e.target.value)} type="password" className="form-control my-2" placeholder="Repetir a Senha" />


                    {
                        carregando ? <div class="spinner-border text-danger" role="status"><span class="sr-only">Loading...</span></div>
                            : <button onClick="" type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Atualizar</button>
                    }
                    {
                        carregando ? <div class="spinner-border text-danger" role="status"><span class="sr-only">Loading...</span></div>
                            : <button onClick="" type="button" className="btn btn-lg btn-danger mt-3 mb-5 btn-cadastro">DELETAR USUARIO</button>
                    }



                    <div className="msg-login text-black text-center my-5">
                        {msgTipo === 'sucesso' && <span><strong>WoW!</strong>Usuário atualizado com sucesso! &#128526; </span>}
                        {msgTipo === 'erro' && <span><strong>Ops!</strong> {msg} &#128546; </span>}
                    </div>
                </form>
            </div>
        </>
    )
}

export default AtualizarUsuario;