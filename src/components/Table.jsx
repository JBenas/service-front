import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        persons: []
    }



    componentDidMount() {
        axios.get(`http://localhost:8081/personal`)
            .then(res => {
                console.log(res.data)
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
                            <td >{person.nombre}</td>
                            <td>{person.apellido}</td>
                            <td>{person.tipo}</td>
                            <td>{person.idEquipo}</td>
                            <td> <button className='btn btn-warning' >Editar</button>  <button type="button" className='btn btn-danger'>X</button></td>
                        </tr>
                    )}
                </tbody>
            </table>

            </div>
        )
    }
}