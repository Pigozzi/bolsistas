import React from 'react';

import { FiDelete } from 'react-icons/fi';
import MUIDataTable from 'mui-datatables';

import Sidebar from '../components/Sidebar';

function BolsistaEspetaculo() {
    const columns = [
        { name: 'espetaculos', label: 'Espetáculos' },
        { name: 'data', label: 'Data' },
        { name: 'entrada', label: 'Entrada' },
        { name: 'saida', label: 'Saída' },
        {
            name: 'options',
            label: 'Opções',
            options: {
                filter: false,
                sort: false,
                customBodyRenderLite: () => {
                    return (
                        <div>
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
        ['Violetas na janela', '17/01/2007', '3:00:00', '6:00:00'],
        ['Afonso Padilha', '17/01/2007', '3:00:00', '6:00:00'],
        ['Catatau', '17/01/2007', '3:00:00', '6:00:00'],
    ];

    return (
        <div>
            <Sidebar />
            <div className="container-fluid">
                <div className="full-height row justify-content-center">
                    <div className="col-8 mt-5">
                        <MUIDataTable
                            title={"JOÃO DAS DORES"}
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

export default BolsistaEspetaculo;