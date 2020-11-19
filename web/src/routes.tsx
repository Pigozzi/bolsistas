import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Bolsistas from './pages/Bolsistas';
import Cadastrar from './pages/Cadastrar';
import Espetaculos from './pages/Espetaculos';
import NovoBolsista from './pages/NovoBolsista';
import NovoEspetaculo from './pages/NovoEspetaculo';
import BolsistaEspetaculo from './pages/BolsistaEspetaculo';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/cadastro" component={Cadastrar} />
                <Route path="/bolsistas" component={Bolsistas} />
                <Route path="/espetaculos" component={Espetaculos} />
                <Route path="/cadastrar/bolsistas" component={NovoBolsista} />
                <Route path="/cadastrar/espetaculos" component={NovoEspetaculo} />
                <Route path="/bolsista/espetaculo" component={BolsistaEspetaculo} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;