import React from 'react'

import { useHistory } from "react-router-dom";

import Page from '../../components/Web/Page'
import Header from '../../components/Web/Header'
import Footer from '../../components/Web/Footer'

import LoginImage from './../../img/Home/login.svg'

import * as S from './../../style/components'

const Login = () => {
    let history = useHistory();
    return (
        <>
            <Header>
                <S.Menu>
                    <S.MenuItem>
                        <S.Button id="btn-register-home" onClick={() => history.push('/register')}>Cadastre-se</S.Button>
                    </S.MenuItem>
                </S.Menu>

            </Header>
            <Page>
                <nav id="page-texts">
                    <S.Title style={{ width: '100%', height: '80px', fontSize: '28pt' }}>Entre com sua conta.</S.Title>
                    <S.Box style={{ height: '250px', marginBottom: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <S.Input id="auth-input" placeholder="example@gmail.com" type="email" />
                        <S.Input id="auth-input" placeholder="****" type="password" />
                        <S.Button id="btn-auth-login">Entrar</S.Button>
                    </S.Box>
                    <S.Text id="txt-auth-register" style={{ width: '100%', color: '#7f8c8d' }} onClick={() => history.push('/register')}>Ainda não tem uma conta? faça um cadastro agora mesmo!</S.Text>
                </nav>
                <nav>
                    <img alt="boy-savemymoney" style={{
                        width: '95%',
                        float: 'right',
                        marginRight: '10px'
                    }} src={LoginImage}></img>
                </nav>
            </Page>
            <Footer>

            </Footer>
        </>
    )
}

export default Login;