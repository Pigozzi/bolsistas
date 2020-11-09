import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Bolsistas from './pages/Bolsistas';
import Espetaculos from './pages/Espetaculos';
import NovoBolsista from './pages/NovoBolsista';
import NovoEspetaculo from './pages/NovoEspetaculo';
import BolsistaEspetaculo from './pages/BolsistaEspetaculo';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/bolsistas" component={Bolsistas} />
                <Route path="/espetaculos" component={Espetaculos} />
                <Route path="/cadastrar/bolsista" component={NovoBolsista} />
                <Route path="/cadastrar/espetaculo" component={NovoEspetaculo} />
                <Route path="/cadastro" component={BolsistaEspetaculo} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;