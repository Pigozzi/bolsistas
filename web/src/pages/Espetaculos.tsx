import React from 'react';

import Sidebar from '../components/Sidebar';
import MUIDataTable from 'mui-datatables';
import { FiDelete, FiEdit2, FiSearch } from 'react-icons/fi';

function Espetaculos() {


    //'Espetáculo', 'Data', 'Opções'
    const columns = [
        { name: 'espetaculo', label: 'Espetáculo' },
        { name: 'data', label: 'Data' },
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
                                className="btn btn-success mr-2"
                                onClick={() => window.alert('Consultar')}
                            >
                                <FiSearch />
                            </button>
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
        ['Violetas na janela', '27/12/2018'],
        ['Violetas na janela', '27/12/2018'],
        ['Violetas na janela', '27/12/2018'],
    ];

    return (
        <div>
            <Sidebar />
            <div className="container-fluid">
                <div className="full-height row justify-content-center">
                    <div className="col-8 mt-5">
                        <MUIDataTable
                            title={"LISTA DE ESPETÁCULOS"}
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

export default Espetaculos;

// https://github.com/gregnb/mui-datatables/blob/master/examples/custom-action-columns/index.js - Custom columns