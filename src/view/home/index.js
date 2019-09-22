import React, { useState } from 'react';
import './home.css';
import { Link,Redirect } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import {useSelector} from 'react-redux';

function Home() {
    return (
        <>
        <Navbar/>
        {useSelector(state => state.usuarioLogado) == 0 ? <Redirect to='/login' /> : null}
        <h1>Logado: {useSelector(state => state.usuarioLogado)}</h1>
        
        </>
    )
}

export default Home; 