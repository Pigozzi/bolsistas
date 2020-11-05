import React from 'react';

import Sidebar from '../components/Sidebar';
import MUIDataTable from 'mui-datatables';

function Bolsistas() {

    const columns = ['Nome Completo', 'Total de horas', 'Opções'];

    const data = [
        ['Rafael Pigozzi', '12:00:00', 'Consultar',],
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
                                // selectableRows: "none",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bolsistas;