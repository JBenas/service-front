import React from 'react';

import Navbar from '../components/Navbar'
import Table from '../components/Table'
import AgregarPersonal from '../components/AgregarPersonal'
import EditarPersonal from '../components/EditarPersonal'

import AgregarEquipamiento from '../components/AgregarEquipamiento'
import EditarEquipamiento from '../components/EditarEquipamiento'
import ListaEquipamiento from '../components/ListaEquipamiento'

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
                <Route exact path='/personal/add' >
                    <AgregarPersonal/>
                </Route>
                <Route exact path='/personal/:id' component={EditarPersonal}/>
                <Route exact path='/personal'>
                    <Table/>
                </Route>
                <Route exact path='/equipamiento/add' component={AgregarEquipamiento}/>
                <Route exact path='/equipamiento/edit/:id' component={EditarEquipamiento}/>
                <Route exact path='/equipamiento' component={ListaEquipamiento}/>
            </div>
        </div>
        </Router>
    );
}