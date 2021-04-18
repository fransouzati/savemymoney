import React from 'react'

import { useHistory } from "react-router-dom";

import Page from '../../components/Web/Page'
import Header from '../../components/Web/Header'
import Footer from '../../components/Web/Footer'

import RegisterImage from './../../img/Home/register.svg'

import * as S from './../../style/components'

const Register = () => {
    let history = useHistory();
    return (
        <>
            <Header>
                <S.Menu>
                    <S.MenuItem>
                        <S.Button id="btn-login-home" onClick={() => history.push('login')}>Entrar</S.Button>
                    </S.MenuItem>
                </S.Menu>

            </Header>
            <Page>
                <nav id="page-texts">
                    <S.Title style={{ width: '100%', height: '80px', fontSize: '28pt' }}>Cadastre sua conta!</S.Title>
                    <S.Text style={{ marginBottom: '15px' }}>É de graça!</S.Text>
                    <S.Box style={{ height: '250px', marginBottom: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <S.Input id="auth-input" placeholder="Seu nome" type="text" />
                        <S.Input id="auth-input" placeholder="example@gmail.com" type="email" />
                        <S.Input id="auth-input" placeholder="****" type="password" />
                        <S.Button id="btn-auth-login">Cadastrar</S.Button>
                    </S.Box>
                    <S.Text id="txt-auth-register" style={{ width: '100%', color: '#7f8c8d' }} onClick={() => history.push('/login')}>Você já tem uma conta? clique aqui para entrar!</S.Text>
                </nav>
                <nav>
                    <img alt="boy-savemymoney" style={{
                        width: '95%',
                        float: 'right',
                        marginRight: '10px'
                    }} src={RegisterImage}></img>
                </nav>
            </Page>
            <Footer>

            </Footer>
        </>
    )
}

export default Register;