import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './index.css';

class CriarUsuario extends Component {

    constructor(props) {
        super(props);

        // state com os campos, porém vazio
        this.state = {
            usuario: {
                nome: "",
                salario: "",
                dataNascimento: "",
                ativo: "true"
            },
            redirect: false
        }
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
                        <legend>Criar Usuário</legend>
                        <div className="usuario-insert">
                            <label htmlFor="nome">Nome</label><br />
                            <input type="text" id="nome" name="nome" placeholder="Digite seu nome"
                                minLength="3" maxLength="100" required value={this.state.usuario.nome}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="usuario-insert">
                            <label htmlFor="salario">Salário</label><br />
                            <input type="text" id="salario" name="salario" placeholder="Digite seu salário"
                                min="1" max="999999" required value={this.state.usuario.salario}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="usuario-insert">
                            <label htmlFor="dataNascimento">Data de nascimento</label><br />
                            <input type="date" id="data" name="dataNascimento"
                                required value={this.state.usuario.dataNascimento}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="usuario-insert">
                            <label htmlFor="ativo">
                                <input type="radio" name="ativo" value="true" checked={this.state.usuario.ativo === "true"} 
                                id=""  onChange={this.handleInputChange}/>
                                Ativo
                            </label>
                            <label htmlFor="ativo">
                                <input type="radio" name="ativo" value="false" checked={this.state.usuario.ativo === "false"} 
                                id=""  onChange={this.handleInputChange}/>
                                Inativo
                            </label>
                        </div>
                        <button type="submit">Cadastrar</button>
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
        // enviando os dados para minha api no método post
        fetch("http://localhost:3003/sistema/usuarios", {
            method: "post",
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

export default CriarUsuario;