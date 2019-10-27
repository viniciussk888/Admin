import Navbar from '../../components/navbar/';
import React, { useState } from 'react';
import './gerar-dados.css';

function GerarDados() {


    const [email, setEmail] = useState();
   
    return (
        <>
            <Navbar/>
            <h1>Gerar Provas</h1>
            <h1>Gerar Estatisticas de Usuarios do app</h1>
            
        </>
    )
}

export default GerarDados;