import React from 'react';
import axios from 'axios';

const BACKEND = "http://localhost:8080";

export default class editEquipment extends React.Component {
    state = {
         id: this.props.match.params.id,
         numeroSerie: 0,
         numeroInventario: 0,
         estado: 0,
         nombre: "",
         descripcion: "",
         tipo: "",
         marca: "",
         modelo: "",
         area: ""
      }
    

    componentDidMount() {
        axios.get(`${BACKEND}/equipamiento/${this.props.match.params.id}`)
            .then(res => {
                const equipments = res.data;
                this.setState( equipments );
                console.log(this.state);
            })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.put(`${BACKEND}/equipamiento/`, this.state)
          .then(res => {
            console.log(res.data);
            window.location = '/equipamiento'
          })
      }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Nombre">Nombre</label>
                        <input required type="text" className="form-control" value={this.state.nombre} name="nombre" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Descripcion">Descripcion</label>
                        <input type="text" className="form-control" value={this.state.descripcion} name="description" onChange={this.handleChange}/>
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
