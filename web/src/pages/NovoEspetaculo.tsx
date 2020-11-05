import React from 'react';
import Sidebar from '../components/Sidebar';

function Espetaculo() {

    return (
        <div>
            <Sidebar />
            <div className="container-fluid">
                <div className="full-height row justify-content-center">
                    <div className="col-7 mt-5">
                        <form>
                            <div className="row fundo">
                                <div className="col-12">
                                    <fieldset>
                                        <legend>Cadastro de Espetáculos</legend>
                                    </fieldset>
                                </div>
                                <div className="col-8 input-block">
                                    <label htmlFor="">Nome do Espetáculo</label>
                                    <input type="text" />
                                </div>
                                <div className="col-4 input-block">
                                    <label htmlFor="">Data do Espetáculo</label>
                                    <input type="date" />
                                </div>
                                <div className="row col-12">
                                    <div className="col-6">
                                        <button className="btn btn-danger input-block">
                                            Limpar campos
                                        </button>
                                    </div>
                                    <div className="col-6 text-right">
                                        <button className="btn btn-primary input-block">
                                            Cadastrar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Espetaculo;