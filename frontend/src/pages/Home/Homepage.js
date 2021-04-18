import React from 'react'

import { useHistory } from "react-router-dom";

import Page from '../../components/Web/Page'
import Header from '../../components/Web/Header'
import Footer from '../../components/Web/Footer'

import BoyImage from './../../img/Home/boy_money.svg'

import * as S from './../../style/components'


const HomePage = () => {
    let history = useHistory();
    return (
        <>
            <Header>
                <S.Menu>
                    <S.MenuItem>
                        <S.Button id="btn-register-home" onClick={() => history.push('/register')}>Cadastre-se</S.Button>
                        <S.Button id="btn-login-home" onClick={() => history.push('login')}>Entrar</S.Button>
                    </S.MenuItem>
                </S.Menu>

            </Header>
            <Page>
                <nav id="page-texts">
                    <S.Title style={{ width: '280px', height: '200px', fontSize: '28pt' }}>Qualquer um merece ter uma boa saúde financeira.</S.Title>
                    <S.Text style={{ width: '450px', color: '#7f8c8d' }}>Vamos ajudar você a ter uma educação financeira e gerenciar seus investimentos.</S.Text>
                </nav>
                <nav>
                    <img alt="boy-savemymoney" style={{
                        width: '95%',
                        float: 'right',
                        marginRight: '10px'
                    }} src={BoyImage}></img>
                </nav>
            </Page>
            <Footer>

            </Footer>
        </>
    )
}

export default HomePage;