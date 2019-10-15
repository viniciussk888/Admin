import React, { useState, useEffect } from 'react';
import './atualizar-questao.css';
import { Link, Redirect } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import { useSelector } from 'react-redux';
import AtualizaQuestao from '../../components/atualiza-questao';
import firebase from '../../config/firebase'

function AtualizaQuestoes() {

  const [questoes, setQuestoes] = useState([]);
  const listaQuestoes = [];
  //gambiarra
  var url = window.location;
  url = url.toString()
  url = url.split("?");
  useEffect(() => {
    firebase.firestore().collection(url[2]).doc(url[1]).get().then(async (resultado) => {
        listaQuestoes.push({
          id: resultado.id,
          ...resultado.data()
        })
      setQuestoes(listaQuestoes);

    })
  })

  return (
    <>
      <Navbar />
      {useSelector(state => state.usuarioLogado) == 0 ? <Redirect to='/login' /> : null}
      {questoes.map(item => <AtualizaQuestao idUP={item.id} enunciadoUP={item.enunciado} A={item.A} B={item.B} C={item.C} D={item.D} altCertaUP={item.altCerta} cursoColUP={url[2]} />)}
    </>
  )
}

export default AtualizaQuestoes; 