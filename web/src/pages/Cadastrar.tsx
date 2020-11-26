import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';

import api from '../services/api';

import '../styles/pages/cadastro.css';

interface ListagemDeBolsistas {
    id: number;
    nome: string;
    rg: number;
}

interface ListagemDeEspetaculos {
    id: number;
    nome: string;
    data: number;
}

function Bolsista() {

    const history = useHistory();

    const [bolsistas, setBolsistas] = useState<ListagemDeBolsistas[]>([]);
    const [espetaculos, setEspetaculos] = useState<ListagemDeEspetaculos[]>([]);
    const [entrada, setEntrada] = useState('');
    const [saida, setSaida] = useState('');
    const [horaExtra, setHoraExtra] = useState('');
    const [descricao, setDescricao] = useState('');

    const [bolsistaSelecionado, setBolsistaSelecionado] = useState('0')
    const [espetaculoSelecionado, setEspetaculoSelecionado] = useState('0')

    useEffect(() => {
        api.get('bolsistas').then(response => {
            setBolsistas(response.data);
        })
    }, [])

    useEffect(() => {
        api.get('espetaculos').then(response => {
            setEspetaculos(response.data);
        })
    }, [])

    function handleBolsista(event: ChangeEvent<HTMLSelectElement>) {
        const bolsista = event.target.value;

        setBolsistaSelecionado(bolsista);
        console.log(bolsista)
    }

    function handleEspetaculo(event: ChangeEvent<HTMLSelectElement>) {
        const espetaculo = event.target.value;

        setEspetaculoSelecionado(espetaculo);
        console.log(espetaculo)
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const horaTotal = '';

        const bolsista_id = bolsistaSelecionado;
        const espetaculo_id = espetaculoSelecionado;

        const data = {
            bolsista_id,
            espetaculo_id,
            entrada,
            saida,
            horaExtra,
            horaTotal,
            descricao
        }

        await api.post('/cadastrar', data);

        alert('Cadastro realizado com sucesso!')

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
                                        <legend>Cadastro de Bolsistas</legend>
                                    </fieldset>
                                </div>
                                <div className="col-12 input-block">
                                    <label htmlFor="name">Nome Completo</label>
                                    <select name="bolsistas" id="bolsistas" value={bolsistaSelecionado} onChange={handleBolsista}>
                                        <option defaultValue="selected" disabled>Selecione um bolsista</option>
                                        {bolsistas.map(bolsista => (
                                            <option key={bolsista.id} value={bolsista.id}>{bolsista.nome} - {bolsista.rg}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-12 input-block">
                                    <label htmlFor="">Nome do Espetáculo</label>
                                    <select name="espetaculos" id="espetaculos" value={espetaculoSelecionado} onChange={handleEspetaculo}>
                                        <option defaultValue="selected" disabled>Selecione um espetáculo</option>
                                        {espetaculos.map(espetaculo => (
                                            <option key={espetaculo.id} value={espetaculo.id}>{espetaculo.nome} - {espetaculo.data}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-6 input-block">
                                    <label htmlFor="name">Entrada</label>
                                    <input
                                        type="time"
                                        name="entrada"
                                        id="entrada"
                                        onChange={event => setEntrada(event.target.value)}
                                    />
                                </div>
                                <div className="col-6 input-block">
                                    <label htmlFor="name">Saída</label>
                                    <input
                                        type="time"
                                        name="saida"
                                        id="saida"
                                        onChange={event => setSaida(event.target.value)}
                                    />
                                </div>
                                <div className="col-6 input-block">
                                    <label htmlFor="name">Horas Extras</label>
                                    <input
                                        type="time"
                                        name="horaExtra"
                                        id="horaExtra"
                                        onChange={event => setHoraExtra(event.target.value)}
                                    />
                                </div>
                                <div className="col-12 input-block">
                                    <label htmlFor="description">Descrição</label>
                                    <textarea
                                        name="description"
                                        id="description"
                                        className="col-12"
                                        rows={4}
                                        onChange={event => setDescricao(event.target.value)}
                                    >
                                    </textarea>
                                </div>
                                <div className="row col-12">
                                    <div className="col-6">
                                        <button className="btn btn-danger input-block">
                                            Limpar campos
                                        </button>
                                    </div>
                                    <div className="col-6 text-right">
                                        <button className="btn btn-success input-block" type="submit">
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
