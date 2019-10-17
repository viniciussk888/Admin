import React, { useState, useEffect } from 'react';
import './lista-questoes.css';
import { Link, Redirect } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import { useSelector } from 'react-redux';
import Listagem from '../../components/lista-questao';
import firebase from '../../config/firebase'

function ListarQuestoes() {

  const [questoes, setQuestoes] = useState([]);
  const [pesquisa, setPesquisa] = useState('');
  const listaQuestoes = [];
  //gambiarra
  var url = window.location;
  url = url.toString()
  url = url.split("?");


  useEffect(() => {
    firebase.firestore().collection(url[1]).get().then(async (resultado) => {
      await resultado.docs.forEach(doc => {
        if(doc.data().enunciado.indexOf(pesquisa)>=0){
        listaQuestoes.push({
          id: doc.id,
          ...doc.data()
        })
      }
      })
      setQuestoes(listaQuestoes);

    })
  })

  return (
    <>
      <Navbar />
      <h2 className='m-2'>Gerenciar Questoes</h2>
      <div className='row p-3'>
      <input onChange={(e) => setPesquisa(e.target.value)} type="text" className='form-control text-center' placeholder='Buscar pelo enunciado'></input>
      </div>
      {useSelector(state => state.usuarioLogado) == 0 ? <Redirect to='/login' /> : null}
      {questoes.map(item => <Listagem id={item.id} enunciado={item.enunciado} altCerta={item.altCerta} A={item.A} B={item.B} C={item.C} D={item.D} autor={item.autor} cursoCol={url[1]} />)}
    </>
  )
}

export default ListarQuestoes; 