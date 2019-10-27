import React, { useState, useEffect } from 'react';
import './home.css';
import { Link, Redirect } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import { useSelector } from 'react-redux';
import HomeCard from '../../components/home-card';
import firebase from '../../config/firebase'




function Home() {

    const [cursos, setCursos] = useState([]);
    const listaCursos = [];

    
        useEffect(() => {
        firebase.firestore().collection('homeCursos').get().then(async (resultado) => {
            await resultado.docs.forEach(doc => {
                listaCursos.push({
                    id: doc.id,
                    ...doc.data()
                })

            })
            setCursos(listaCursos);

             })
        })
    

    return (
        <>
            <Navbar />
            {useSelector(state => state.usuarioLogado) == 0 ? <Redirect to='/login' /> : null}
            <h5>Admin: {useSelector(state => state.usuarioEmail)}</h5>
            <div className="row p-3">
                {cursos.map(item => <HomeCard key={item.id} id={item.id} img={item.urlImage} nome={item.nome} />)}
            </div>

        </>
    )
}

export default Home; 