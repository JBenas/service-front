import React from 'react';
import axios from 'axios';

const BACKEND = "http://localhost:8080"

export default class EquipmentList extends React.Component {
    state = {
        equipments: []
    }

    eliminar = (id, e) => {
        axios.delete(`${BACKEND}/equipamiento/${id}`)
            .then(res => {
                window.location.reload(true);
            })
    }

    editar = (id, e) => {
        window.location = `/equipamiento/edit/${id}`;
    }

    componentDidMount() {
        axios.get(`${BACKEND}/equipamiento/`)
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
                        <th scope="col">Nombre</th>
                        <th scope="col" style={{ width: "20%"}}>Descripción</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Modelo</th>
                        <th scope="col">Nº de serie</th>
                        <th scope="col">Nº de inventario</th>
                        <th scope="col">Area</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.equipments.map((equipment) =>
                        <tr key={equipment.id}>
                            <td>{equipment.nombre}</td>
                            <td>{equipment.descripcion}</td>
                            <td>{equipment.tipo}</td>
                            <td>{equipment.marca}</td>
                            <td>{equipment.modelo}</td>
                            <td>{equipment.numeroSerie}</td>
                            <td>{equipment.numeroInventario}</td>
                            <td>{equipment.area}</td>
                            <td>{equipment.estado}</td>
                            <td>
                                <button className='btn btn-warning' onClick={(e) => this.editar(equipment.id, e)}>
                                    Editar
                                </button>
                                &nbsp;&nbsp;
                                <button type="button" className='btn btn-danger'
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
