import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import './lista-questao.css';
import firebase from '../../config/firebase'


function Listagem({id,enunciado,altCerta,autor,cursoCol,A, B, C, D}){

  function deletarQuestao(){
    firebase.firestore().collection(cursoCol).doc(id).delete().then(function() {
      alert("Questão deletada com sucesso!");
  }).catch(function(error) {
      console.error("Error ao remover:\n ", error);
  });
  }

  var enumCerta;
  switch (altCerta) {
    case 'a':
      enumCerta = A;
      break;
    case 'b':
      enumCerta = B;
      break;
    case 'c':
      enumCerta = C;
      break;
    case 'd':
      enumCerta = D;
      break;
    default:
  }

    return(
        <div className='m-3'>
        <div className="table-responsive">
          <table className="table table-striped table-sm tbt">
            <thead>
              <tr>
                <th>ID</th>
                <th>Enunciado</th>
                <th>Alternativa Correta</th>
                <th>Autor</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >{id}</td>
                <td>{enunciado}</td>
                <td>{enumCerta}</td>
                <td>{autor}</td>
                <td>
                  <Link to={'/atulizarquestao/?'+id+'?'+cursoCol} className="btn btn-primary ml-1">Editar</Link>
                  <button type='button' className='btn btn-danger ml-1' onClick={deletarQuestao}>Excluir</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
}
export default Listagem;