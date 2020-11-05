import React from 'react';
import Sidebar from '../components/Sidebar';

import '../styles/pages/cadastro.css';

function Bolsista() {

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
                                        <legend>Cadastro de Bolsistas</legend>
                                    </fieldset>
                                </div>
                                <div className="col-12 input-block">
                                    <label htmlFor="name">Nome completo</label>
                                    <input type="text" />
                                </div>
                                <div className="col-8 input-block">
                                    <label htmlFor="">Nome do Espetáculo</label>
                                    <select name="espetaculo" id="espetaculo">
                                        <option selected disabled>Selecione um espetáculo</option>
                                        <option value="VNJ">Violetas na janela</option>
                                    </select>
                                </div>
                                <div className="col-4 input-block">
                                    <label htmlFor="">Data do Espetáculo</label>
                                    <select name="espetaculo" id="espetaculo">
                                        <option selected disabled>Selecione a data do espetáculo</option>
                                        <option value="date">16/03/2021</option>
                                    </select>
                                </div>
                                <div className="col-6 input-block">
                                    <label htmlFor="name">Entrada</label>
                                    <input type="time" min="00:00" max="24:00" />
                                </div>
                                <div className="col-6 input-block">
                                    <label htmlFor="name">Saída</label>
                                    <input type="time" />
                                </div>
                                <div className="col-12 input-block">
                                    <label htmlFor="description">Descrição</label>
                                    <textarea name="description" id="description" className="col-12" rows={4}></textarea>
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

export default Bolsista;