import React, { useEffect, useState } from 'react';

import Sidebar from '../components/Sidebar';
import MUIDataTable from 'mui-datatables';
import { FiEdit2, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../services/api';

interface Bolsista {
    id: number;
    nome: string;
    rg: number;
}

function Bolsistas() {

    const [bolsistas, setBolsistas] = useState<Bolsista[]>([]);

    const columns = [
        { name: 'name', label: 'Nome Completo' },
        { name: 'rg', label: 'RG' },
        { name: 'total_hours', label: 'Total de horas' },
        { name: 'options', label: 'Opções' },
    ];

    useEffect(() => {
        api.get('bolsistas').then(response => {
            setBolsistas(response.data)
        })
    })

    return (
        <div>
            <Sidebar />
            <div className="container-fluid">
                <div className="full-height row justify-content-center">
                    <div className="col-8 mt-5">
                        <MUIDataTable
                            title={"LISTA DE BOLSISTAS"}
                            data={bolsistas.map(bolsista => {
                                return [
                                    bolsista.nome,
                                    bolsista.rg,
                                    '12:00:00',
                                    [
                                        <Link to={`/bolsista/espetaculo/${bolsista.id}`} className="btn btn-success mr-2">
                                            <FiSearch />
                                        </Link>,
                                        <Link to={`/bolsista/espetaculo/${bolsista.id}`} className="btn btn-primary mr-2">
                                            <FiEdit2 />
                                        </Link>
                                    ]
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

export default Bolsistas;