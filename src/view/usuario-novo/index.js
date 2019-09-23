import React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';
import Navbar from '../../components/navbar/';
import './usuario-novo.css';

function NovoUsuario() {

    const [nome, setNome] = useState();
    const [codProf, setCod] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [senha2, setSenha2] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] = useState();

    const db = firebase.firestore();

    function cadastrarInFireStore() {
        //função de cadastrar no firestore o professor
        db.collection('administrador').add({
            nome: nome,
            codigoProfessor: codProf,
            email: email,
            dataCadastro: new Date()
        }).then(() => {
            setMsgTipo('sucesso');
        }).catch(erro => {
            setMsgTipo('erro')
        });
    }

    function cadastrar() {

        setCarregando(1);

        setMsgTipo(null);

        if (!email || !senha || !nome ) {
            setMsgTipo('erro')
            setMsg('Você precisa informar os dados para fazer o cadastro! PS. CodProf não obrigatorio.')
            setCarregando(0);
            return;
        } else if (senha != senha2) {
            setMsgTipo('erro')
            setMsg('As senhas não conferem!')
            setCarregando(0);
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
            setCarregando(0);
            cadastrarInFireStore();
            setMsgTipo('sucesso')
        }).catch(erro => {
            setCarregando(0);
            setMsgTipo('erro')
            switch (erro.message) {
                case 'Password should be at least 6 characters':
                    setMsg('A senha deve ter pelo menos 6 caracteres!');
                    break;
                case 'The email address is already in use by another account.':
                    setMsg('Este email já está sendo utilizado por outro usuário!');
                    break;
                case 'The email address is badly formatted.':
                    setMsg('O formato do seu email é inválido!');
                    break;
                default:
                    setMsg('Não foi possível cadastrar. Tente novamente mais tarde!');
                    break;
            }
        })
    }



    return (
        <>
        <Navbar></Navbar>
        <div className="form-cadastro">
            <form className="text-center form-login mx-auto mt-5">
            <div className="text-center mb-4">
            <i class="fas fa-user-plus fa-7x ub"></i>
                <p className="ub font-weight-bold mt-3">Adicionar novo usuario administrador</p>
                </div>
                <input onChange={(e) => setNome(e.target.value)} type="text" className="form-control my-2" placeholder="Nome" />
                <input onChange={(e) => setCod(e.target.value)} type="text" className="form-control my-2" placeholder="Cod.Professor" />
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email" />
                <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Senha" />
                <input onChange={(e) => setSenha2(e.target.value)} type="password" className="form-control my-2" placeholder="Repetir a Senha" />


                {
                    carregando ? <div class="spinner-border text-danger" role="status"><span class="sr-only">Loading...</span></div>
                        : <button onClick={cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Cadastrar</button>
                }



                <div className="msg-login text-black text-center my-5">
                    {msgTipo === 'sucesso' && <span><strong>WoW!</strong>Usuário cadastrado com sucesso! &#128526; </span>}
                    {msgTipo === 'erro' && <span><strong>Ops!</strong> {msg} &#128546; </span>}
                </div>
            </form>
        </div>
        </>
    )
}

export default NovoUsuario;