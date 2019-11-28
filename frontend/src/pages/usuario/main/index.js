import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Main extends Component {
    // criação do state usuário no construtor da classe
    constructor(props) {
        super(props);
        this.state = {
            usuario: []
        }
    }

    // é chamado logo após o componente ser montado
    // da um get via fetch na url e busca os registros
    // obtém o usuario e carrega os dados no formato json dentro do estado usuario criado no construtor
    // setState de usuario faz uma atualização do estado de usuario, que estava vazio e vai ser carregado com 
    // os dados json
    componentDidMount() {
        fetch(`http://localhost:3003/sistema/usuarios`, {mode:"cors"})
            .then(usuario => usuario.json().then(usuario => this.setState({ usuario }))
            )
    }

    render() {
        // obtendo o usuario que está no state
        const { usuario } = this.state;

        // percorre todos os usuários com o map
        return usuario.map((usuario, index) => (

            <div className="usuario-list">
                <div key={index}>
                    <h5>{usuario.nome}</h5>
                    <article>
                        <span>{usuario.salario}</span>
                        <p><Link to={`/usuarios/${usuario.id}`}>Detalhes</Link></p>
                        <br />
                    </article>
                </div>
            </div>
        ));
    }
}