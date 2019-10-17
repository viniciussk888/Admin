import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';

function Navbar() {
    const dispatch = useDispatch();
    

    return (
        <nav class="navbar navbar-expand-lg">
            <i class="fas fa-chalkboard-teacher fa-3x text-white mr-3"></i>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars text-white"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
                    {
                        useSelector(state => state.usuarioLogado) != 1 ? 
                    <>
                    <li className="nav-item"><Link className="nav-link text-white" to="/login">Login</Link></li>
                    <li className="nav-item"><Link className="nav-link text-white" to="/novousuario">Cadastrar</Link></li>
                    </>
                    ://OP TERNARIO controlando menu
                    <>
                    <li className="nav-item"><Link className="nav-link text-white" to="/cadastroquestao">Submeter Questões</Link></li>
                    <li className="nav-item"><Link className="nav-link text-white" to="/gerenciarusuario">Gerenciar Usuario</Link></li>
                    <li className="nav-item"><Link className="nav-link text-white" to="#">Gerar Dados</Link></li>
                    <li className="nav-item"><Link className="nav-link text-white" onClick={() => dispatch({ type: 'LOG_OUT'})} to="/login">Sair</Link></li>
                    </>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;