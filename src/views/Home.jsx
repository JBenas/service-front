import React from 'react';

import Navbar from '../components/Navbar'
import Table from '../components/Table'
import AgregarPersonal from '../components/AgregarPersonal'
import EditarPersonal from '../components/EditarPersonal'

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
            <Navbar></Navbar>
            <div>
                <Route exact path='/'>
                    <h1>SAPASI BREOOO</h1>
                </Route>
                <Route exact path='/personal/add' component={AgregarPersonal} />
                <Route exact path='/personal/editar/:id' component={EditarPersonal}/>
                <Route exact path='/personal' component={Table}/>
            </div>
        </div>
        </Router>
    );
}