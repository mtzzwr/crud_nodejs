import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainUsuario from './pages/usuario/main';
import Usuario from './pages/usuario/details';
import CriarUsuario from './pages/usuario/insert';
import EditarUsuario from './pages/usuario/update';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/usuarios" component={MainUsuario}/>
            <Route exact path = "/usuarios/:id" component={Usuario}/>
            <Route exact path = "/criarUsuario/" component={CriarUsuario}/>
            <Route exact path = "/editarUsuario/:id" component={EditarUsuario}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;