import React from 'react'

import Page from '../../components/Web/Page'
import Header from '../../components/Web/Header'
import Footer from '../../components/Web/Footer'

import BoyImage from './../../img/Home/boy_money.svg'

import * as S from './../../style/components'

const Home = () => {
    return (
        <>
            <Header>
                <S.Menu>
                    <S.MenuItem>
                        <S.Button style={{ backgroundColor: 'transparent', fontSize: '10pt', color: '#7f8c8d', marginRight: '5px' }}>Cadastre-se</S.Button>
                        <S.Button style={{ backgroundColor: 'rgb(35,177,163)', color: 'white', float: 'right', marginRight: '90px' }}>Entrar</S.Button>
                    </S.MenuItem>
                </S.Menu>

            </Header>
            <Page>
                <nav id="page-texts">
                    <S.Title style={{ width: '280px', height: '250px', fontSize: '28pt' }}>Qualquer um merece ter uma boa saúde financeira.</S.Title>
                    <S.Text style={{ width: '450px', color: '#7f8c8d' }}>Vamos ajudar você a ter uma educação financeira e gerenciar seus investimentos.</S.Text>
                </nav>
                <nav>
                    <img alt="boy-savemymoney" style={{
                        width: '95%',
                        float: 'right'
                    }} src={BoyImage}></img>
                </nav>
            </Page>
            <Footer>

            </Footer>
        </>
    )
}

export default Home;