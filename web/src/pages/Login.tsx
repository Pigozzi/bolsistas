import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/pages/login.css';

function Login() {
    const history = useHistory();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (!user) {
            return;
        }

        if (!password) {
            return;
        }

        if (user === 'teste' && password === '123') {
            history.push('bolsistas')
        }
    }

    return (
        <div className="container">
            <div className="full-height row align-items-center justify-content-center">
                <div className="col-6">
                    <form id="page-login" onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Cadastro de Bolsistas</legend>
                        </fieldset>
                        <div className="input-block">
                            <label htmlFor="user">Usuário</label>
                            <input
                                type="text"
                                id="user"
                                value={user}
                                onChange={event => setUser(event.target.value)}
                                required
                            />
                        </div>
                        <div className="input-block">
                            <label htmlFor="password">Senha</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button className="confirm-button" type="submit">
                            Acessar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;