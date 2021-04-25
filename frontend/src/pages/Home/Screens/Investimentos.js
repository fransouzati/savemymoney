import React, { useState } from 'react'

import Wallet from './../../../components/Dashboard/Wallet'

import profileImage from './../../../img/User/profile.png'

import * as S from './../../../style/components'

import Investimento from './../../../components/Dashboard/Data/Investimento'
import Ativo from './../../../components/Dashboard/Data/Ativo'

const Investimentos = () => {

    const [tab, setTab] = useState('criptomoedas')

    return (
        <>

            <nav id="profile">
                <nav id="user" style={{ display: 'flex' }}>
                    <img alt={"profile"} src={profileImage} width="64" style={{ borderRadius: '50%' }} />
                    <S.Title style={{ marginLeft: '15px', marginTop: '15px', color: '#95a5a6' }}>Olá Paulo Henrique.</S.Title>
                </nav>
                <nav id="boxs">
                    <S.Box id="user-box" style={{ width: '350px', height: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <S.Title style={{ color: 'rgb(35, 177, 163)' }}>R$ {9500.00.toFixed(2)}</S.Title>
                        <S.Text style={{ fontSize: 16, color: '#7f8c8d', marginTop: '9px' }}>Esse é seu saldo total</S.Text>
                    </S.Box>

                    {tab === 'criptomoedas' && (
                        <S.Box id="user-box" style={{ width: '400px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <S.Text id="box-title" style={{ marginTop: '90' }}>Carteiras</S.Text>
                            <nav>
                                <Wallet bank="bitcoin" value={0.01300} />
                                <Wallet bank="etherium" value={0.2895} />
                            </nav>
                        </S.Box>
                    )}

                    {tab === 'acoes' && (
                        <S.Box id="user-box" style={{ width: '430px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <S.Text id="box-title" style={{ marginTop: '90' }}>Ações</S.Text>
                            <nav style={{marginTop:'20px'}}>
                                <Ativo ativo="OIBR3" quantidade={1380} saldo={2000} />
                                <Ativo ativo="ITSA4" quantidade={1380} saldo={2000} />
                                <Ativo ativo="TSL3" quantidade={1380} saldo={2000} />
                            </nav>
                        </S.Box>
                    )}

                </nav>
            </nav>
            <nav style={{ height: '100%', display: 'flex' }}>

                <S.Box id="user-box" style={{ backgroundColor: 'transparent', marginLeft: '20%', marginTop: '50px', width: '500px', height: '100%', display: 'flex', flexDirection: 'column', }}>
                    <nav style={{ marginBottom: '10px' }}>
                        <S.Button onClick={() => setTab('criptomoedas')}>Criptomoedas</S.Button>
                        <S.Button onClick={() => setTab('acoes')}>Ações</S.Button>
                    </nav>

                    {tab === 'criptomoedas' && (
                        <>
                            <Investimento bank="Binance" tipo="criptomoeda" precopago={3500} cotacaopaga={330.000} data={new Date()} ativo="bitcoin" />
                            <Investimento bank="Binance" tipo="criptomoeda" precopago={3500} cotacaopaga={12.500} data={new Date()} ativo="etherium" />
                        </>
                    )}

                    {tab === 'acoes' && (
                        <>
                            <Investimento bank="Inter" tipo="acao" precopago={500} cotacaopaga={10.30} data={new Date()} quantidade={49} ativo="ITSA4 | ITAU.SA" />
                            <Investimento bank="Nubank" tipo="acao" precopago={2000} cotacaopaga={1.19} data={new Date()} quantidade={1680} ativo="OIBR3 | OI BRASIL LTDA." />
                        </>
                    )}

                </S.Box>

            </nav>
        </>
    )
}

export default Investimentos;