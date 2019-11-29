import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Usuario extends Component {
    state = {
        usuario: {}
    };

    componentDidMount() {
        // obter o id passado pelo parâmetro
        const { id } = this.props.match.params;

        fetch(`http://localhost:3003/sistema/usuarios/${id}`)
            .then(usuario =>
                usuario.json().then(usuario => this.setState({ usuario }))
            )
    }

    render() {
        // obtendo o estado do usuario e guardando na const usuario
        const { usuario } = this.state;

        if(usuario.ativo){
            usuario.ativo = 'Usuário ativo';
        }else{
            usuario.ativo = 'Usuário inativo';
        }

        return (
            <div className="usuario-info">
                <h1>{usuario.nome}</h1>
                <h1>{usuario.salario}</h1>
                <h1>{usuario.dataNascimento}</h1>
                <h1>{usuario.ativo}</h1>
                <br />
                <Link to={`/usuarios`}>Voltar</Link><br />
                <Link to={`/editarUsuario/${usuario.id}`}>Editar</Link><br />
                <Link to={`/deletarUsuario/${usuario.id}`}>Deletar</Link>
            </div>
        )
    }
}