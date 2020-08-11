import React from 'react';

export default (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">GESTIÓN</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/personal">Personal</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/equipamiento">Equipamiento</a>
                    </li>
                </ul>
                <a className="form-inline my-2 my-lg-0 btn btn-success navbutton" href='/personal/add' type="button">
                    Agregar Personal
                </a>
                <a className="form-inline my-2 my-lg-0 btn btn-success navbutton" href='/equipamiento/add' type="button">
                    Agregar Equipamiento
                </a>
            </div>
        </nav>
    );
}