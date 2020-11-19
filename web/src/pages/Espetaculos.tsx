import React, { useEffect, useState } from 'react';

import Sidebar from '../components/Sidebar';
import MUIDataTable from 'mui-datatables';
import { FiEdit2, FiSearch } from 'react-icons/fi';
import api from '../services/api';
import { Link } from 'react-router-dom';

interface Espetaculo {
    id: number;
    nome: string;
    data: string;
}

function Espetaculos() {

    const [espetaculos, setEspetaculos] = useState<Espetaculo[]>([])

    const columns = [
        { name: 'espetaculo', label: 'Espetáculo' },
        { name: 'data', label: 'Data' },
        { name: 'options', label: 'Opções' }
    ];

    useEffect(() => {
        api.get('espetaculos').then(response => {
            setEspetaculos(response.data);
        })
    })

    return (
        <div>
            <Sidebar />
            <div className="container-fluid">
                <div className="full-height row justify-content-center">
                    <div className="col-8 mt-5">
                        <MUIDataTable
                            title={"LISTA DE ESPETÁCULOS"}
                            data={espetaculos.map(espetaculo => {
                                return [
                                    espetaculo.nome,
                                    espetaculo.data,
                                    <Link to={`/editar/espetaculo/${espetaculo.id}`} className="btn btn-primary mr-2">
                                        <FiEdit2 />
                                    </Link>
                                ]
                            })}
                            columns={columns}
                            options={{
                                search: true,
                                filter: false,
                                viewColumns: false,
                                selectableRows: "none"
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Espetaculos;

// https://github.com/gregnb/mui-datatables/blob/master/examples/custom-action-columns/index.js - Custom columns