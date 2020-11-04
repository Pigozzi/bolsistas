import React from 'react';

import Sidebar from '../components/Sidebar';
import MUIDataTable from 'mui-datatables';

function Espetaculos() {

    const columns = ['Espetáculo', 'Data', 'Opções'];

    const data = [
        ['Violetas na janela', '27/12/2018', 'Consultar',],
        ['Violetas na janela', '27/12/2018', 'Editar',],
        ['Violetas na janela', '27/12/2018', 'Deletar',],
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
                                selectableRows: "none",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Espetaculos;