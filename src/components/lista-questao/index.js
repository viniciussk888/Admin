import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import './lista-questao.css';


function Listagem({id,enunciado,altCerta,autor}){

    return(
        <div className='m-3'>
        <div className="table-responsive">
          <table className="table table-striped table-sm table-dark tbt">
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
                <td>{altCerta}</td>
                <td>{autor}</td>
                <td>
                  <button type='button' className='btn btn-primary mr-1'>Editar</button>
                  <button type='button' className='btn btn-danger ml-1'>Excluir</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
}
export default Listagem;