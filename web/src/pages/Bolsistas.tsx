import React from 'react';

import Sidebar from '../components/Sidebar';
import MUIDataTable from 'mui-datatables';
import { FiDelete, FiEdit2, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Bolsistas() {

    const columns = [
        { name: 'name', label: 'Nome Completo' },
        { name: 'total_hours', label: 'Total de horas' },
        {
            name: 'options',
            label: 'Opções',
            options: {
                filter: false,
                sort: false,
                customBodyRenderLite: () => {
                    return (
                        <div>
                            <Link to="/bolsista/espetaculo" className="btn btn-success mr-2">
                                <FiSearch />
                            </Link>
                            <button
                                className="btn btn-primary mr-2"
                                onClick={() => window.alert('Editar')}
                            >
                                <FiEdit2 />
                            </button>
                            <button
                                className="btn btn-danger mr-2"
                                onClick={() => window.alert('Deletar')}
                            >
                                <FiDelete />
                            </button>
                        </div>
                    )
                }
            }
        }
    ];

    const data = [
        ['JOÃO DAS DORES', '12:00:00', 'Consultar',],
        ['Rafael Pigozzi', '12:00:00', 'Editar'],
        ['Rafael Pigozzi', '12:00:00', 'Deletar'],
    ];

    return (
        <div>
            <Sidebar />
            <div className="container-fluid">
                <div className="full-height row justify-content-center">
                    <div className="col-8 mt-5">
                        <MUIDataTable
                            title={"LISTA DE BOLSISTAS"}
                            data={data}
                            columns={columns}
                            options={{
                                search: true,
                                filter: false,
                                viewColumns: false,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bolsistas;