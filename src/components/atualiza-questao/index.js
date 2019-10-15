import React, { useState } from 'react';
import './atualiza-questao.css';
import { Redirect } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import { useSelector } from 'react-redux';
//Firebase imports
import firebase from '../../config/firebase';
import 'firebase/auth';

function AtualizaQuestao({idUP,cursoColUP,enunciadoUP,A,B,C,D,altCertaUP}) {

    const [msgTipo, setMsgTipo] = useState();
    const [enunciado, setEnunciado] = useState(enunciadoUP);
    const [altA, setAltA] = useState(A);
    const [altB, setAltB] = useState(B);
    const [altC, setAltC] = useState(C);
    const [altD, setAltD] = useState(D);
    const [altCerta, setaltCerta] = useState(altCertaUP);
    const [carregando, setCarregando] = useState();
    const userEmail = useSelector(state => state.usuarioEmail);

    const db = firebase.firestore();

    function submeter() {
        setCarregando(1);
        if(!enunciado || !altA || !altB || !altC || !altD || !altCerta){
            alert("Todos os campos precisam ser preenchidos!");
            setCarregando(0);
            return;
        }
        setMsgTipo(null);
         db.collection(cursoColUP).doc(idUP).update({
                    enunciado: enunciado,
                    A: altA,
                    B: altB,
                    C: altC,
                    D: altD,
                    altCerta: altCerta,
                    postada: new Date(),
                    autor: userEmail
                }).then(() => {
                    setMsgTipo('sucesso');
                    setCarregando(0);
                }).catch(erro => {
                    setMsgTipo('erro');
                    setCarregando(0);
                });
    }

    return (
        <>
            <center><i class="fas fa-folder-plus fa-5x ub"></i></center>
            <div className="col-12">
                <div className="row">
                    <h3 className="mx-auto font-weight-bold mt-2 mb-4 ub">Atualizar Questão</h3>
                </div>

                <form className="text-center form-login mx-auto">
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text ub" for="inputGroupSelect01">Curso</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01">
                                <option disabled selected>-- {cursoColUP} --</option>
                            </select>
                        </div>
                        <label className='ub font-weight-bold float-left'>Enunciado:</label>
                        <textarea onChange={(e) => setEnunciado(e.target.value)} className="form-control res">{enunciadoUP}</textarea>
                        <label className='ub font-weight-bold float-left'>Alternativa A:</label>
                        <input onChange={(e) => setAltA(e.target.value)} type="text" className="form-control" placeholder={A}></input>
                        <label className='ub font-weight-bold float-left'>Alternativa B:</label>
                        <input onChange={(e) => setAltB(e.target.value)} type="text" className="form-control" placeholder={B}></input>
                        <label className='ub font-weight-bold float-left'>Alternativa C:</label>
                        <input onChange={(e) => setAltC(e.target.value)} type="text" className="form-control" placeholder={C}></input>
                        <label className='ub font-weight-bold float-left'>Alternativa D:</label>
                        <input onChange={(e) => setAltD(e.target.value)} type="text" className="form-control" placeholder={D}></input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text ub" for="inputGroupSelect02">Alternativa Correta</label>
                        </div>
                        <select onChange={(e) => setaltCerta(e.target.value)} className="custom-select" id="inputGroupSelect02">
                            <option disabled selected>-- {altCertaUP} --</option>
                            <option value="a">A</option>
                            <option value="b">B</option>
                            <option value="c">C</option>
                            <option value="d">D</option>
                        </select>
                    </div>
                {
                    carregando ? <div className="spinner-border text-danger" role="status"><span className="sr-only">Loading...</span></div>
                    : <button onClick={submeter} type="button" className="mb-3 btn btn-lg btn-block mt-3 btn-cadastro">Atualizar</button>
                }
                </form>
                <div className="msg-login text-center my-2 ub">
                    {msgTipo === 'sucesso' && <span>Questão Atualizada com Sucesso! &#128526;</span>}
                    {msgTipo === 'erro' && <span><strong>Ops! </strong> Ocorreu um erro ao Atualizar a Questão! &#128549;</span>}

                </div>
            </div>
        </>
    )
}

export default AtualizaQuestao;