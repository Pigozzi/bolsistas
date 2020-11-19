import React, { FormEvent, useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import api from '../services/api';

function Espetaculo() {

    const history = useHistory();

    const [nome, setNome] = useState('');
    const [data, setData] = useState('');

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const info = {
            nome,
            data
        }

        await api.post('/cadastrar/espetaculos', info);

        alert('Espetáculo cadastrado com sucesso!')

        history.push('/espetaculos');
    }

    return (
        <div>
            <Sidebar />
            <div className="container-fluid">
                <div className="full-height row justify-content-center">
                    <div className="col-7 mt-5">
                        <form onSubmit={handleSubmit}>
                            <div className="row fundo">
                                <div className="col-12">
                                    <fieldset>
                                        <legend>Cadastro de Espetáculos</legend>
                                    </fieldset>
                                </div>
                                <div className="col-8 input-block">
                                    <label htmlFor="nome">Nome do Espetáculo</label>
                                    <input
                                        type="text"
                                        name="nome"
                                        id="nome"
                                        onChange={event => setNome(event.target.value)}
                                    />
                                </div>
                                <div className="col-4 input-block">
                                    <label htmlFor="data">Data do Espetáculo</label>
                                    <input
                                        type="date"
                                        name="data"
                                        id="data"
                                        onChange={event => setData(event.target.value)}
                                    />
                                </div>
                                <div className="row col-12">
                                    <div className="col-6">
                                        <button className="btn btn-danger input-block">
                                            Limpar campos
                                        </button>
                                    </div>
                                    <div className="col-6 text-right">
                                        <button type="submit" className="btn btn-success input-block">
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

export default Espetaculo;