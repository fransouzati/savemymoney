import React from 'react'

import * as S from './../../../style/components'

import { format } from 'date-fns'

import NubankImage from './../../../img/Banks/nubank.jpg'
import BinanceImage from './../../../img/Banks/binance.png'
import InterImage from './../../../img/Banks/inter.png'

import eth from './../../../img/Criptos/eth.png'
import btc from './../../../img/Criptos/btc.png'

//https://www.codegrepper.com/code-examples/javascript/javascript+first+letter+uppercase+es6
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const Investimento = (props) => {

    const { bank, tipo, precopago, cotacaopaga, data, ativo, quantidade } = props;

    return (
        <S.Box style={{ display: 'flex', marginBottom: '10px', width: tipo === 'criptomoeda' ? '125%' : '155%', alignItems: 'center' }}>
            {bank === 'Binance' && (
                <img src={BinanceImage} alt={bank} width="55" style={{ marginLeft: '25px', marginTop: '20px', marginBottom: '15px' }} />
            )}
            {bank === 'Inter' && (
                <img src={InterImage} alt={bank} width="55" style={{ marginLeft: '25px', marginTop: '20px', marginBottom: '15px' }} />
            )}
            {bank === 'Nubank' && (
                <img src={NubankImage} alt={bank} width="55" style={{ marginLeft: '25px', marginTop: '20px', marginBottom: '15px' }} />
            )}
            <nav>
                <S.Text style={{ marginTop: '25px', fontSize: '13pt', marginLeft: '20px' }}>{bank}</S.Text>
                <S.Text style={{ fontSize: '13pt', marginLeft: '20px', color: '#95a5a6' }}>Compra de {capitalizeFirstLetter(ativo)}</S.Text>
                <S.Text style={{ fontSize: '13pt', marginLeft: '20px', color: '#95a5a6' }}>{format(new Date(data), 'dd/MM/yyyy')}</S.Text>
            </nav>
            <nav style={{ marginTop: '35px' }}>
                <S.Text style={{ fontSize: '13pt', marginLeft: '20px', color: '#95a5a6' }}>Preço pago:  </S.Text>
                <S.Text style={{ fontSize: '13pt', marginLeft: '20px', color: '#95a5a6' }}>Cotação paga:  </S.Text>
            </nav>
            <nav style={{ marginTop: '35px' }}>
                <S.Text style={{ fontSize: '13pt', marginLeft: '20px', color: 'rgb(35, 177, 163)' }}>R${precopago}</S.Text>
                {tipo === 'criptomoeda' && (
                    <S.Text style={{ fontSize: '13pt', marginLeft: '20px', color: '#e67e22', marginBottom: '10px' }}>R${cotacaopaga.toFixed(3)}</S.Text>
                )}
                {tipo === 'acao' && (
                    <>
                        <S.Text style={{ fontSize: '13pt', marginLeft: '20px', color: '#e67e22' }}>R${cotacaopaga.toFixed(2)}</S.Text>
                        <S.Text style={{ fontSize: '13pt', marginLeft: '20px', color: '#95a5a6', marginBottom: '10px' }}>{quantidade} qtd</S.Text>
                    </>
                )}

            </nav>
            <nav>
                {ativo === 'bitcoin' && (
                    <img src={btc} alt='bitcoin' style={{ marginLeft: '50px', marginTop: '35px' }} width="32"></img>
                )}
                {ativo === 'etherium' && (
                    <img src={eth} alt='etherium' style={{ marginLeft: '50px', marginTop: '35px' }} width="32"></img>
                )}
            </nav>
        </S.Box>
    )
}

export default Investimento;