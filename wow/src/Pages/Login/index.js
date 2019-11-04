import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import api from '../../Services/api';
import { login, username } from '../../Services/auth';

class CallerLogin extends Component {

    state = {
        email: "",
        password: "",
        erros: ""
    };


    handleLogin = async e => {
        e.preventDefault();
        const { emailLogin, passLogin } = this.state;
        if (!emailLogin || !passLogin) {
            this.setState({ erros: "Preencha os campos para continuar" })
        } else {
            try {
                await api.post("/login", {
                    email: emailLogin,
                    password: passLogin,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(response => {
                    console.log(response.data)
                    console.log(response.status)
                    login(response.data.token)
                    username(response.data.user.name)
                });
                window.confirm("Você está Logado")
                this.props.history.push("");
            } catch (err) {
                console.log(err);
                this.setState({
                    erros:
                        "Houve um erro ao efetuar o login"
                })
            }
        }
    };


    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <div>
                    {this.state.erros}
                </div>

                <div>
                    <label>Email</label>
                    <input type='text' placeholder='Email' name='email' onChange={e => this.setState({ emailLogin: e.target.value })} />
                </div>

                <div>
                    <label>Senha</label>
                    <input type='password' placeholder='Senha' name='pass' onChange={e => this.setState({ passLogin: e.target.value })} />
                </div>
                <button type='submit'>Entrar</button>
            </form>
        );
    }



};

export default withRouter(CallerLogin);
