import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';

import api from '../services/api';

function NovoBolsista() {
    const history = useHistory();

    const [nome, setNome] = useState('');
    const [rg, setRg] = useState('');

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = {
            nome,
            rg
        }

        await api.post('/cadastrar/bolsistas', data);

        alert('Bolsista cadastrado com sucesso!')

        history.push('/bolsistas');
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
                                        <legend>Novo Bolsista</legend>
                                    </fieldset>
                                </div>
                                <div className="col-8 input-block">
                                    <label htmlFor="nome">Nome do Bolsista</label>
                                    <input 
                                        type="text" 
                                        name="nome"
                                        id="nome"
                                        onChange={event => setNome(event.target.value)}
                                    />
                                </div>
                                <div className="col-4 input-block">
                                    <label htmlFor="rg">RG</label>
                                    <input 
                                        type="text"
                                        name="rg"
                                        id="rg"
                                        onChange={event => setRg(event.target.value)}
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

export default NovoBolsista;