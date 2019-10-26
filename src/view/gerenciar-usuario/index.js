import React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';
import Navbar from '../../components/navbar/';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './gerenciar-usuario.css';

function AtualizarUsuario() {


    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [senha2, setSenha2] = useState();
    const [carregando, setCarregando] = useState();
    const dispatch = useDispatch();
    const emailUser = useSelector(state => state.usuarioEmail);

    const user = firebase.auth().currentUser;
    const db = firebase.firestore();
    
    

    function alterarEmail() {
        setCarregando(1);
        user.updateEmail(email).then(function () {
            alert('Email alterado!');
            dispatch({ type: 'LOG_OUT' })
            window.location.href = "/";
        }).catch(function (error) {
            alert('Erro ao alterar!');
            setCarregando(0);
        });
    }
    function alterarSenha() {
        setCarregando(1);
        if (senha == senha2) {
            user.updatePassword(senha).then(function () {
                alert("Senha alterada!");
                setCarregando(0);
            }).catch(function (error) {
                alert("Erro ao alterar Senha!\nPara alterar senha é preciso ter feito login recentemente.");
                setCarregando(0);
            });
        } else {
            alert("As senhas devem ser iguais!");
            setCarregando(0);
        }

    }
    function reAuth(){
        var pass;
            do {
                pass = prompt ("Confirmar senha!");
                } while (pass == null || pass == "");
                  firebase.auth().signInWithEmailAndPassword(emailUser, pass).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorCode+" - "+errorMessage);
                    return;
                  });
    }
    function deletarUsuario() {
        var result = window.confirm("TEM CERTEZA QUE DESEJA DELETAR USUARIO?!?");
        if (result == true) {
            reAuth();
            setCarregando(1);
            db.collection("administrador").doc(user.uid).delete().then(function () {
                firebase.auth().currentUser.delete().then(function () {
                    alert("USUARIO DELETADO!");
                    dispatch({ type: 'LOG_OUT' })
                    window.location.href = "/";
                }).catch(function (error) {
                    alert("Erro ao deletar usuario!"+error);
                    setCarregando(0);
                });
                setCarregando(0);
            }).catch(function (error) {
                alert("ERRO AO DELETAR USUARIO!");
                setCarregando(0);
            });

        } else {

        }
    }


    return (
        <>
            <Navbar></Navbar>
            {useSelector(state => state.usuarioLogado) == 0 ? <Redirect to='/login' /> : null}
            <div className="form-cadastro">
                <form className="text-center form-login mx-auto mt-5">
                    <div className="text-center mb-4">
                        <i class="fas fa-users-cog fa-7x ub"></i>
                        <p className="ub font-weight-bold mt-3">Alterar Dados</p>
                    </div>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder={emailUser} />

                    {
                        carregando ? <div class="spinner-border text-danger" role="status"><span class="sr-only">Loading...</span></div>
                            : <button onClick={alterarEmail} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Alterar Email</button>
                    }

                    <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Senha" />
                    <input onChange={(e) => setSenha2(e.target.value)} type="password" className="form-control my-2" placeholder="Repetir a Senha" />

                    {
                        carregando ? <div class="spinner-border text-danger" role="status"><span class="sr-only">Loading...</span></div>
                            : <button onClick={alterarSenha} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Alterar Senha</button>
                    }



                    {
                        carregando ? <div class="spinner-border text-danger" role="status"><span class="sr-only">Loading...</span></div>
                            : <button onClick={deletarUsuario} type="button" className="btn btn-lg btn-danger mt-3 mb-5 btn-cadastro">DELETAR USUARIO</button>
                    }
                </form>
            </div>
        </>
    )
}

export default AtualizarUsuario;