import React from 'react';
import axios from 'axios';


export default class agregarPersonal extends React.Component {

    state = {
        Nombre: '',
        Apellido:'',
        Rut:'',
        Tipo:'',
        Telefono:'',
        Email:'',
        idEquipo:''
      }
    

    handleChange = event => {
        this.setState({ 
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    
        const user = {
            nombre: this.state.Nombre,
            apellido: this.state.Apellido,
            rut: this.state.Rut,
            tipo: this.state.Tipo,
            telefono: this.state.Telefono,
            email: this.state.Email,
            idEquipo: this.state.idEquipo
        };
    
        // console.log({user});
        axios.post(`http://localhost:8081/personal`, user)
          .then(res => {
            console.log(res);
            console.log(res.data);
            window.location = '/personal'
          })
      }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Nombre">Nombre</label>
                        <input  required type="text" className="form-control" value={this.state.Nombre} name="Nombre" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Apellido">Apellido</label>
                        <input  required type="text" className="form-control" value={this.state.Apellido} name="Apellido" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Rut">Rut</label>
                        <input  required type="text" className="form-control" value={this.state.Rut} name="Rut" aria-describedby='RutHelp' onChange={this.handleChange}/>
                        <small id='RutHelp' className='form-text text-muted'>Escriba rut de la forma 12.345.678-9</small> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="Tipo">Tipo</label>
                        <input  required type="text" className="form-control" value={this.state.Tipo} name="Tipo" aria-describedby='TipoHelp' onChange={this.handleChange}/>
                        <small id='TipoHelp' className='form-text text-muted'>Tipo,Profesion o cargo</small> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="Telefono">Telefono</label>
                        <input  required type="text" className="form-control" value={this.state.Telefono} name="Telefono" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input  required type="text" className="form-control" value={this.state.Email} name="Email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="idEquipo">Equipo</label>
                        <input  required type="text" className="form-control" value={this.state.idEquipo} name="idEquipo" onChange={this.handleChange}/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
