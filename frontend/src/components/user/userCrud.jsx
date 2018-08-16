import React, { Component } from 'react';
import axios from 'axios';

import Main from '../template/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuarios',
    subtitle: 'Cadastro de usuarios: inclur, listar, alterar e excluir!'
}

const baseUrl = 'http://localhost:3001/users';
const initialState = {
    user: {
        name: '',
        email: '',
    },
    list: [],
}

export default class UserCrud extends Component {

    state = { ...initialState };

    clear() {
        this.setState({ user: initialState.user });
    }

    save() {
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}`: baseUrl;

        axios[method](url, user)
            .then(resp => {

            })
    }

    render() {
        return (
            <Main {...headerProps} >
                usuarios
            </Main>
        )
    }
}