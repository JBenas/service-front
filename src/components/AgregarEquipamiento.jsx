import React from 'react';
import axios from 'axios';

const BACKEND = "http://localhost:8080";

export default class agregarPersonal extends React.Component {
    state = {
        id: undefined,
        numeroSerie: 0,
        numeroInventario: 0,
        estado: undefined,
        nombre: "",
        descripcion: "",
        tipo: "",
        marca: "",
        modelo: "",
        area: ""
    }
    

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post(`${BACKEND}/equipamiento/`, this.state)
            .then(res => {
                console.log(res.data);
                window.location = '/equipamiento'
            })
      }

    render() {
        return (
            <div className='container p-3'>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Nombre">Nombre</label>
                        <input required type="text" className="form-control" value={this.state.nombre} name="nombre" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Descripcion">Descripcion</label>
                        <textarea className="form-control" value={this.state.descripcion} name="descripcion" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Tipo">Tipo</label>
                        <input type="text" className="form-control" value={this.state.tipo} name="tipo" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Marca">Marca</label>
                        <input type="text" className="form-control" value={this.state.marca} name="marca" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Modelo">Modelo</label>
                        <input type="text" className="form-control" value={this.state.modelo} name="modelo" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Nº de serie">Nº de serie</label>
                        <input required type="number" className="form-control" value={this.state.numeroSerie} name="numeroSerie" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Nº de inventario">Nº de inventario</label>
                        <input required type="number" className="form-control" value={this.state.numeroInventario} name="numeroInventario" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Area">Area</label>
                        <input required type="text" className="form-control" value={this.state.area} name="area" onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
