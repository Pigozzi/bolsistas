import React from 'react';
import { FiCheck } from 'react-icons/fi';
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
                                    <label htmlFor="name">Nome Completo</label>
                                    <select name="espetaculo" id="espetaculo">
                                        <option selected disabled>Selecione um bolsista</option>
                                        <option value="JMRG">Jorge Matheus - 152485806</option>
                                        <option value="JMRG">ABC Matheus - 152485806</option>
                                    </select>
                                </div>
                                <div className="col-12 input-block">
                                    <label htmlFor="">Nome do Espetáculo</label>
                                    <select name="espetaculo" id="espetaculo">
                                        <option selected disabled>Selecione um espetáculo</option>
                                        <option value="VNJ">Violetas na janela - 16/03/2021</option>
                                        <option value="VNJ">Tremembé - 14/12/2020</option>
                                    </select>
                                </div>
                                <div className="col-6 input-block">
                                    <label htmlFor="name">Entrada</label>
                                    <input type="time" />
                                </div>
                                <div className="col-6 input-block">
                                    <label htmlFor="name">Saída</label>
                                    <input type="time" />
                                </div>
                                <div className="col-6 input-block">
                                    <label htmlFor="name">Horas Extras</label>
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

export default Bolsista;
