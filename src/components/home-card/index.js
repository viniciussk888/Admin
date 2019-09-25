import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home-card.css';

function HomeCard({key, img, nome}){
    return(
        <div className="col-md-3 col-sm-12">
            <img src={img} className="card-img-top img-cartao btn-detalhes" alt="Imagem do Evento" />

            <div className="card-body bgc mb-2">
                <h5>{nome}</h5>
                <p className="card-text text-justify">
                Acesse para editar ou excluir questoes do Quiz!
                </p>

                <div className="row rodape-card d-flex align-items-center">
                    <div className="col-6">
                        <Link to='#' className="btn btn-sm btn-detalhes">+ Acessar</Link>                    
                    </div>

                    <div className="col-6 text-right">
                    <i class="fas fa-exclamation-circle"></i><span>Questões: 5</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HomeCard;