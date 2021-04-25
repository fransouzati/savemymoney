import React from 'react'

import Wallet from './../../../components/Dashboard/Wallet'
import CreditCard from './../../../components/Dashboard/CreditCard'
import IconButton from './../../../components/IconButton'
import Icon from './../../../components/Icon'

import profileImage from './../../../img/User/profile.png'

import BillIcon from './../../../img/Icons/bill.svg'
import PlusIcon from './../../../img/Icons/plus.svg'
import InvestIcon from './../../../img/Icons/invest.svg'

import * as S from './../../../style/components'

const Home = () => {
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
                    <S.Box id="user-box" style={{ width: '400px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <S.Text id="box-title" style={{ marginTop: '90' }}>Carteiras</S.Text>
                        <nav>
                            <Wallet bank="nubank" value={1000} />
                            <Wallet bank="binance" value={1000} />
                            <Wallet bank="inter" value={2500} />
                        </nav>
                    </S.Box>
                    <S.Box id="user-box" style={{ width: '400px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <S.Text id="box-title">Cartões de Creditos</S.Text>
                        <CreditCard bank="nubank" data={{ available: 1250.00, billTotal: 450.00 }} />
                        <CreditCard bank="inter" data={{ available: 1250.00, billTotal: 450.00 }} />
                    </S.Box>
                </nav>
            </nav>
            <nav style={{ height: '100%' }}>
                <S.Box id="user-box" style={{ marginLeft: '100%', width: '400px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <S.Text id="box-title">Funções</S.Text>
                    <nav style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                        <IconButton image={BillIcon} width="48" height="48" title={"Divida"} onClick={() => alert('oi')} />
                        <IconButton image={PlusIcon} width="48" height="48" title={"Ganho"} onClick={() => alert('oi')} />
                        <IconButton image={InvestIcon} width="50" height="50" title={"Investimento"} onClick={() => alert('oi')} />
                    </nav>
                </S.Box>
                <S.Box id="user-box" style={{ marginLeft: '100%', width: '400px', height: '100%', display: 'flex', flexDirection: 'column', }}>
                    <S.Text id="box-title" style={{ textAlign: 'center' }}>Historico de Abril</S.Text>
                    <nav style={{ display: 'flex', flexDirection: 'row', }}>
                        <nav style={{ display: 'flex', flexDirection: 'row', marginTop: '12px', width: '100%', marginLeft: '25px' }}>
                            <Icon image={BillIcon} width="48" height="48" />
                            <nav>
                                <S.Text style={{ marginLeft: '9%', fontSize: 19, color: '#e74c3c', marginTop: '35px' }}>Gastos total: R$ {5.235}</S.Text>
                                <S.Text style={{ marginLeft: '9%', fontSize: 15, color: '#bdc3c7', marginTop: '9px' }}>Você gastou 35% mais do que mês passado!</S.Text>
                            </nav>

                        </nav>
                    </nav>
                    <nav style={{ display: 'flex', flexDirection: 'row' }}>
                        <nav style={{ display: 'flex', flexDirection: 'row', marginTop: '12px', width: '100%', marginLeft: '25px' }}>
                            <Icon image={InvestIcon} width="48" height="48" />
                            <nav style={{ width: '100%' }}>
                                <S.Text style={{ marginLeft: '9%', fontSize: 19, color: '#1abc9c', marginTop: '35px' }}>Total investido: R$ {5.235}</S.Text>
                                <S.Text style={{ marginLeft: '9%', fontSize: 15, color: '#bdc3c7', marginTop: '9px' }}>Rendimentos dos ultimos 30 dias:</S.Text>
                                <S.Text style={{ marginLeft: '9%', fontSize: 15, color: '#1abc9c', marginTop: '9px' }}>R$ {250},00 (5%+)</S.Text>
                            </nav>
                        </nav>
                    </nav>
                </S.Box>
            </nav>
        </>
    )
}

export default Home;