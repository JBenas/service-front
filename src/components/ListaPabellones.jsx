import React from 'react';
import axios from 'axios';

const BACKEND = "http://localhost:8080"

export default class EquipmentList extends React.Component {
    state = {
        pabellones: []
    }

    eliminar = (id, e) => {
        axios.delete(`${BACKEND}/pabellon/${id}`)
            .then(res => {
                window.location.reload(true);
            })
    }
    // TODO: verificar funcion
    editar = (id, e) => {
        window.location = `/pabellon/edit/${id}`;
    }

    componentDidMount() {
        axios.get(`${BACKEND}/pabellon/`)
            .then(res => {
                const equipments = res.data;
                this.setState({equipments});
            })
    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Nro. Sala</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.pabellones.map((pabellon) =>
                        <tr key={pabellon.id}>
                            <td>{pabellon.sala}</td>
                            <td>{equipment.description}</td>
                            <td>{equipment.estado}</td>
                            <td>
                                <button className='btn btn-sm btn-warning' onClick={(e) => this.editar(equipment.id, e)}>
                                    Editar
                                </button>
                                &nbsp;&nbsp;
                                <button type="button" className='btn btn-sm btn-danger'
                                        onClick={(e) => this.eliminar(equipment.id, e)}>X
                                </button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}