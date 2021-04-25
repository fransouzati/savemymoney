import React, { useState } from 'react'

import PageDashboard from '../../components/Web/PageDashboard'
import Header from '../../components/Web/Header'
import Footer from '../../components/Web/Footer'

import * as S from './../../style/components'

import Home from './Screens/Home'
import Investimentos from './Screens/Investimentos'

const Dashboard = () => {

    const [tab, setTab] = useState('home')

    return (
        <>
            <Header>
                <S.Menu>
                    <S.MenuItem>
                        <S.Button onClick={() => setTab('home')}>Home</S.Button>
                        <S.Button onClick={() => setTab('investimentos')}>Investimentos</S.Button>
                        <S.Button onClick={() => setTab('transacoes')}>Transações</S.Button>
                        <S.Button onClick={() => setTab('historico')}>Historico</S.Button>
                        <S.Button onClick={() => setTab('parcelas')}>Parcelas</S.Button>
                    </S.MenuItem>
                </S.Menu>
            </Header>
            <PageDashboard>
                {tab === 'home' && (
                    <Home />
                )}
                {tab === 'investimentos' && (
                    <Investimentos />
                )}
            </PageDashboard>
            <Footer>

            </Footer>
        </>
    )
}

export default Dashboard;