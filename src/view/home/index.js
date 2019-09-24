import React, { useState } from 'react';
import './home.css';
import { Link,Redirect } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import {useSelector} from 'react-redux';
import HomeCard from '../../components/home-card';

function Home() {
    return (
        <>
        <Navbar/>
        {useSelector(state => state.usuarioLogado) == 0 ? <Redirect to='/login' /> : null}
        <h5>Bem vindo: {useSelector(state => state.usuarioEmail)}</h5>
        <div className="row">
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
        </div>
        
        </>
    )
}

export default Home; 