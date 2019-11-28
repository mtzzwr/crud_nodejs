import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainUsuario from './pages/usuario/main';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/usuarios" component={MainUsuario}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;