import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home-card.css';

function HomeCard(){
    return(
        <div className="col-md-3 col-sm-12">
            <img src='https://via.placeholder.com/100x100' className="card-img-top img-cartao" alt="Imagem do Evento" />

            <div className="card-body">
                <h5>Curso</h5>
                <p className="card-text text-justify">
                Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60.
                </p>

                <div className="row rodape-card d-flex align-items-center">
                    <div className="col-6">
                        <Link to='#' className="btn btn-sm btn-detalhes">+ detalhes</Link>                    
                    </div>

                    <div className="col-6 text-right">
                    <i class="fas fa-exclamation-circle"></i><span>Total 5</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HomeCard;