import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './index.css';
import moment from 'moment';

class EditarUsuario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usuario: {
                nome: "",
                salario: "",
                dataNascimento: ""
            },
            redirect: false
        }
    }

    componentDidMount() {
        // buscando o id passado pelo parâmetro
        const { id } = this.props.match.params;

        fetch(`http://localhost:3003/sistema/usuarios/${id}`)
            .then(data => {
                data.json().then(data => {
                    this.setState({ usuario: data });
                })
            })
    }

    render() {

        const { redirect } = this.state;

        // se o redirect for true, siginifica que o insert foi feito com sucesso
        // e vai ser redirecionado
        if (redirect) {
            return <Redirect to="/usuarios"></Redirect>;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Editar Usuário</legend>
                        <div className="usuario-update">
                            <label htmlFor="nome">Nome</label><br />
                            <input type="text" id="nome" name="nome" placeholder="Digite seu nome"
                                minLength="3" maxLength="100" required value={this.state.usuario.nome}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="usuario-update">
                            <label htmlFor="salario">Salário</label><br />
                            <input type="text" id="salario" name="salario" placeholder="Digite seu salário"
                                min="1" max="999999" required value={this.state.usuario.salario}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="usuario-update">
                            <label htmlFor="dataNascimento">Data de nascimento</label><br />
                            <input type="text" id="data" name="dataNascimento"
                                required value={moment(this.state.usuario.dataNascimento).format('DD/MM/YYYY')}
                                onChange={this.handleInputChange} />
                        </div>
                        <button type="submit">Atualizar</button>
                    </fieldset>
                </form>
            );
        }
    }

        // obtendo um elemento atribuindo um evento
        handleInputChange = event => {
            // pegar o elemento que está sendo alterado
            const target = event.target;
            // pegar o name do elemento
            const name = target.name;
            // pegar o valor do elemento
            const value = target.value;
    
            // atualizar o elemento
            this.setState(prevState => ({
                usuario: {...prevState.usuario, [name]: value}
            }));
        }
    
        // método que envia os dados do formulário para o backend
        handleSubmit = event => {
            // busca do id no state para passar na url
            const {id} = this.state.usuario;
            // enviando os dados para minha api no método post
            fetch(`http://localhost:3003/sistema/usuarios/${id}`, {
                method: "put",
                body: JSON.stringify(this.state.usuario),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(data => {
                if(data.ok){
                    this.setState({redirect: true})
                }
            })
    
            event.preventDefault();
        };

}


export default EditarUsuario;