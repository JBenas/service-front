import React from 'react';
import axios from 'axios';

const BACKEND = "http://localhost:8088"

export default class editarPersonal extends React.Component {

    state = {
        sala: '',
        state:'',
        description:''
      }
    

    componentDidMount() {
        axios.get(`${BACKEND}/pabellon/${this.props.match.params.id}`)
            .then(res => {
                const pabellon = res.data;
                this.setState( pabellon );
                // console.log(this.state);
            })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
    
        const pabellon = {
            sala: this.state.sala,
            state: this.state.state,
            description: this.state.description,
        };

        axios.post(`${BACKEND}/pabellon/${this.props.match.params.id}`, pabellon)
          .then(res => {
            window.location = '/pabellon'
          })
      }

    render() {
        return (
            <div className='container'>
            
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Nombre">Sala</label>
                        <input  required type="text" className="form-control" value={this.state.sala} name="sala" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Apellido">Estado</label>
                        {/* Change for switch or similar */}
                        <input  required type="text" className="form-control" value={this.state.state} name="state" onChange={this.handleChange}/>
                    </div>
                    
                    
                    <div className="form-group">
                        <label htmlFor="Telefono">Decripción</label>
                        <textarea  required type="text" className="form-control" value={this.state.description} name="description" onChange={this.handleChange}></textarea>
                    </div>
                    
                    
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
                </div>
        )
    }
}
