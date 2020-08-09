import React from 'react';
import axios from 'axios';


export default class editarPersonal extends React.Component {

    state = {
        nombre: '',
        apellido:'',
        rut:'',
        tipo:'',
        telefono:'',
        email:'',
        idEquipo:''
      }
    

    componentDidMount() {
        // console.log(this.props.match.params.id)
        axios.get(`http://localhost:8081/personal/${this.props.match.params.id}`)
            .then(res => {
                const persons = res.data;
                this.setState( persons );
                console.log(this.state);
            })
    }

    handleChange = event => {
        // const{target:{value}} = event;
        
        this.setState({
            [event.target.name]: event.target.value
        })

        // this.setState({ 
        //     ...this.state,
        //     [event.target.name]: event.target.value
        // });
    }

    handleSubmit = event => {
        event.preventDefault();
    
        const user = {
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            rut: this.state.rut,
            tipo: this.state.tipo,
            telefono: this.state.telefono,
            email: this.state.email,
            idEquipo: this.state.idEquipo
        };
    
        console.log(user);
        axios.put(`http://localhost:8081/personal/${this.props.match.params.id}`, user)
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
                        <input  required type="text" className="form-control" value={this.state.nombre} name="nombre" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Apellido">Apellido</label>
                        <input  required type="text" className="form-control" value={this.state.apellido} name="apellido" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Rut">Rut</label>
                        <input  required type="text" className="form-control" value={this.state.rut} name="rut" aria-describedby='RutHelp' onChange={this.handleChange}/>
                        <small id='RutHelp' className='form-text text-muted'>Escriba rut de la forma 12.345.678-9</small> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="Tipo">Tipo</label>
                        <input  required type="text" className="form-control" value={this.state.tipo} name="tipo" aria-describedby='TipoHelp' onChange={this.handleChange}/>
                        <small id='TipoHelp' className='form-text text-muted'>Tipo,Profesion o cargo</small> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="Telefono">Telefono</label>
                        <input  required type="text" className="form-control" value={this.state.telefono} name="telefono" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input  required type="text" className="form-control" value={this.state.email} name="email" onChange={this.handleChange}/>
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
