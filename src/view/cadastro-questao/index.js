import React, { useState } from 'react';
import './cadastro-questao.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import { useSelector } from 'react-redux';

//Firebase imports
import firebase from '../../config/firebase';
import 'firebase/auth';

function CadastroQuestao() {

    const [msgTipo, setMsgTipo] = useState();
    const [curso, setCurso] = useState();
    const [enunciado, setEnunciado] = useState();
    const [altA, setAltA] = useState();
    const [altB, setAltB] = useState();
    const [altC, setAltC] = useState();
    const [altD, setAltD] = useState();
    const [altCerta, setaltCerta] = useState();
    const [userEmail, setUserEmail] = useState();

    const db = firebase.firestore();

    function submeter() {
        setMsgTipo(null);
        switch (curso) {
            case 'SI':
                db.collection('SI').add({
                    enunciado: enunciado,
                    A: altA,
                    B: altB,
                    C: altC,
                    D: altD,
                    altCerta: altCerta,
                    postada: new Date()
                }).then(() => {
                    setMsgTipo('sucesso');
                }).catch(erro => {
                    setMsgTipo('erro')
                });
                break;
            case 'direito':
                db.collection('direito').add({
                    enunciado: enunciado,
                    A: altA,
                    B: altB,
                    C: altC,
                    D: altD,
                    altCerta: altCerta,
                    postada: new Date()
                }).then(() => {
                    setMsgTipo('sucesso');
                }).catch(erro => {
                    setMsgTipo('erro')
                });
                break;
            case 'adm':
                db.collection('administracao').add({
                    enunciado: enunciado,
                    A: altA,
                    B: altB,
                    C: altC,
                    D: altD,
                    altCerta: altCerta,
                    postada: new Date()
                }).then(() => {
                    setMsgTipo('sucesso');
                }).catch(erro => {
                    setMsgTipo('erro')
                });
                break;
            case 'agro':
                db.collection('agronegocio').add({
                    enunciado: enunciado,
                    A: altA,
                    B: altB,
                    C: altC,
                    D: altD,
                    altCerta: altCerta,
                    postada: new Date()
                }).then(() => {
                    setMsgTipo('sucesso');
                }).catch(erro => {
                    setMsgTipo('erro')
                });
                break;
            case 'contabeis':
                db.collection('contabeis').add({
                    enunciado: enunciado,
                    A: altA,
                    B: altB,
                    C: altC,
                    D: altD,
                    altCerta: altCerta,
                    postada: new Date()
                }).then(() => {
                    setMsgTipo('sucesso');
                }).catch(erro => {
                    setMsgTipo('erro')
                });
                break;
            case 'pedagogia':
                db.collection('pedagogia').add({
                    enunciado: enunciado,
                    A: altA,
                    B: altB,
                    C: altC,
                    D: altD,
                    altCerta: altCerta,
                    postada: new Date()
                }).then(() => {
                    setMsgTipo('sucesso');
                }).catch(erro => {
                    setMsgTipo('erro')
                });
                break;
            case 'gestao':
                db.collection('gestao').add({
                    enunciado: enunciado,
                    A: altA,
                    B: altB,
                    C: altC,
                    D: altD,
                    altCerta: altCerta,
                    postada: new Date()
                }).then(() => {
                    setMsgTipo('sucesso');
                }).catch(erro => {
                    setMsgTipo('erro')
                });
                break;
            case 'publicitaria':
                db.collection('publicidade').add({
                    enunciado: enunciado,
                    A: altA,
                    B: altB,
                    C: altC,
                    D: altD,
                    altCerta: altCerta,
                    postada: new Date()
                }).then(() => {
                    setMsgTipo('sucesso');
                }).catch(erro => {
                    setMsgTipo('erro')
                });
                break;
            default:
                setMsgTipo('erro')

        }
    }

    return (
        <>
            <Navbar />
            <center><i class="fas fa-folder-plus fa-5x ub"></i></center>
            <div className="col-12">
                <div className="row">
                    <h3 className="mx-auto font-weight-bold mt-2 mb-4 ub">Nova Questão</h3>
                </div>

                <form>
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text ub" for="inputGroupSelect01">Curso</label>
                            </div>
                            <select onChange={(e) => setCurso(e.target.value)} className="custom-select" id="inputGroupSelect01">
                                <option disabled selected>-- Selecione um Curso --</option>
                                <option value="SI">Sistemas de Informação</option>
                                <option value="direito">Direito</option>
                                <option value="adm">Administração</option>
                                <option value="agro">Agronegócio</option>
                                <option value="contabeis">Ciencias Contabeis</option>
                                <option value="pedagogia">Pedagogia</option>
                                <option value="gestao">Gestão Comercial</option>
                                <option value="publicitaria">Produção Publicitária</option>
                            </select>
                        </div>
                        <label className='ub font-weight-bold'>Enunciado:</label>
                        <textarea onChange={(e) => setEnunciado(e.target.value)} className="form-control res"></textarea>
                        <label className='ub font-weight-bold'>Alternativa A:</label>
                        <input onChange={(e) => setAltA(e.target.value)} type="text" className="form-control"></input>
                        <label className='ub font-weight-bold'>Alternativa B:</label>
                        <input onChange={(e) => setAltB(e.target.value)} type="text" className="form-control"></input>
                        <label className='ub font-weight-bold'>Alternativa C:</label>
                        <input onChange={(e) => setAltC(e.target.value)} type="text" className="form-control"></input>
                        <label className='ub font-weight-bold'>Alternativa D:</label>
                        <input onChange={(e) => setAltD(e.target.value)} type="text" className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text ub" for="inputGroupSelect02">Alternativa Correta</label>
                        </div>
                        <select onChange={(e) => setaltCerta(e.target.value)} className="custom-select" id="inputGroupSelect02">
                            <option disabled selected>-- Selecione uma Alternativa --</option>
                            <option value="a">A</option>
                            <option value="b">B</option>
                            <option value="c">C</option>
                            <option value="d">D</option>
                        </select>
                    </div>
                    <button onClick={submeter} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Enviar Questão</button>
                </form>
                <div className="msg-login text-center my-5 ub">
                    {msgTipo === 'sucesso' && <span>Questão Enviada com Sucesso! &#128526;</span>}
                    {msgTipo === 'erro' && <span><strong>Ops! </strong> Ocorreu um erro ao Enviar a Questão! &#128549;</span>}

                </div>
            </div>
        </>
    )
}

export default CadastroQuestao;