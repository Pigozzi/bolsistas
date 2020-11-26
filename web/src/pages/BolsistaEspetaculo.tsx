import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiDelete } from 'react-icons/fi';
import MUIDataTable from 'mui-datatables';

import Sidebar from '../components/Sidebar';
import api from '../services/api';

interface Listagem {
    id: number;
    bolsista_id: number;
    espetaculo_id: number;
    entrada: number;
    saida: number;
    horaExtra: number;
    horaTotal: number;
    descricao: number;
    bolsista: string;
    espetaculo: string;
    data: string;
}

function BolsistaEspetaculo() {

    const [bolsistaEspetaculo, setBolsistaEspetaculo] = useState<Listagem[]>([]);

    const columns = [
        { name: 'espetaculos', label: 'Espetáculos' },
        { name: 'data', label: 'Data' },
        { name: 'entrada', label: 'Entrada' },
        { name: 'saida', label: 'Saída' },
        { name: 'options', label: 'Opções' }
    ];

    useEffect(() => {
        api.get('bolsista/espetaculo').then(response => {
            setBolsistaEspetaculo(response.data)
        })
    })

    return (
        <div>
            <Sidebar />
            <div className="container-fluid">
                <div className="full-height row justify-content-center">
                    <div className="col-8 mt-5">
                        <MUIDataTable
                            title={bolsistaEspetaculo.map(nome => (
                                nome.bolsista
                            ))}
                            data={bolsistaEspetaculo.map(be => {
                                return [
                                    be.espetaculo,
                                    be.data,
                                    be.entrada,
                                    be.saida,
                                    <Link to={`/deletar/bolsista/espetaculo/${be.id}`} className="btn btn-danger mr-2">
                                        <FiDelete />
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

export default BolsistaEspetaculo;