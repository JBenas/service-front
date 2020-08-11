import React from 'react';

import Navbar from '../components/Navbar'
import Table from '../components/Table'
import AgregarPersonal from '../components/AgregarPersonal'
import EditarPersonal from '../components/EditarPersonal'

import AgregarEquipamiento from '../components/AgregarEquipamiento'
import EditarEquipamiento from '../components/EditarEquipamiento'
import ListaEquipamiento from '../components/ListaEquipamiento'

// OK
import ListaPabellon from '../components/ListaPabellones'
import EditarPabellon from '../components/EditarPabellon'
import AgregarPabellon from '../components/AgregarPabellon'

// Check
import ListaSalas from '../components/ListaSalasRec'
import EditarSalas from '../components/EditarPabellon'
import AgregarSalas from '../components/EditarPabellon'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default (props) => {
    return (
        <Router>
        <div>
            <Navbar/>
            <div>
                <Route exact path='/'/>
                <Route exact path='/personal/add' component={AgregarPersonal}/>
                <Route exact path='/personal/edit/:id' component={EditarPersonal}/>
                <Route exact path='/personal' component={Table}/>
                <Route exact path='/equipamiento/add' component={AgregarEquipamiento}/>
                <Route exact path='/equipamiento/edit/:id' component={EditarEquipamiento}/>
                <Route exact path='/equipamiento' component={ListaEquipamiento}/>
                <Route exact path='/pebellon' component={ListaPabellon}/>
                <Route exact path='/pebellon/add' component={AgregarPabellon}/>
                <Route exact path='/pebellon/edit/:id' component={EditarPabellon}/>
                <Route exact path='/salas' component={ListaSalas}/>
                <Route exact path='/salas/add' component={AgregarSalas}/>
                <Route exact path='/salas/edit/:id' component={EditarSalas}/>
            </div>
        </div>
        </Router>
    );
}