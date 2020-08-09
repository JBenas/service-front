import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    eliminar = (id,e) => {    
        // console.log('this is:', id);  
        
        // console.log(id);
        axios.delete(`http://localhost:8081/personal/${id}`)
        .then(res => {
            // console.log(res);
            // console.log(res.data);
            window.location.reload(true);
        })
    }

    editar = (id,e)=>{
        window.location = `/personal/editar/${id}`;
    }

    componentDidMount() {
        axios.get(`http://localhost:8081/personal`)
            .then(res => {
                // console.log(res.data)
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Equipo</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.persons.map((person) =>
                        <tr key={person.id}>
                            <td>{person.nombre}</td>
                            <td>{person.apellido}</td>
                            <td>{person.tipo}</td>
                            <td>{person.idEquipo}</td>
                            <td> <button className='btn btn-warning' onClick={(e)=>this.editar(person.id,e)} >Editar</button>&nbsp;&nbsp;
                            <button type="button" className='btn btn-danger' onClick={(e)=>this.eliminar(person.id,e)}>X</button></td>
                        </tr>
                    )}
                </tbody>
            </table>

            </div>
        )
    }
}