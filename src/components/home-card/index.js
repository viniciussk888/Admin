import React from 'react';
import { Link } from 'react-router-dom';
import './home-card.css';

function HomeCard({id, img, nome}){
    return(
        <div className="col-md-3 col-sm-12">
            <img src={img} className="card-img-top img-cartao btn-detalhes" alt="Imagem do Evento" />

            <div className="card-body bgc mb-2">
                <h5>{nome}</h5>
                <div className="row rodape-card d-flex align-items-center">
                    <div className="col-6">
                        <Link to={'/listarquestao/?'+id} className="btn btn-sm btn-detalhes">+ Acessar</Link>                    
                    </div>

                    <div className="col-6 text-right">
                    <i class="fab fa-android"></i>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HomeCard;