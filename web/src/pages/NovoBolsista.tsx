import React from 'react';
import { FiCheck } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';

function NovoBolsista() {
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
                                        <legend>Novo Bolsista</legend>
                                    </fieldset>
                                </div>
                                <div className="col-8 input-block">
                                    <label htmlFor="name">Nome do Bolsista</label>
                                    <input type="text" />
                                </div>
                                <div className="col-4 input-block">
                                    <label htmlFor="rg">RG</label>
                                    <input type="text" />
                                </div>
                                <div className="row col-12">
                                    <div className="col-6">
                                        <button className="btn btn-danger input-block">
                                            Limpar campos
                                        </button>
                                    </div>
                                    <div className="col-6 text-right">
                                        <button className="btn btn-success input-block">
                                            <FiCheck className="mr-2" />
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

export default NovoBolsista;