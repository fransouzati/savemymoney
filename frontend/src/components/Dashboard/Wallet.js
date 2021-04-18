import React from 'react'

import * as S from './../../style/components'

import NubankImage from './../../img/Banks/nubank.jpg'
import BinanceImage from './../../img/Banks/binance.png'
import InterImage from './../../img/Banks/inter.png'

//https://www.codegrepper.com/code-examples/javascript/javascript+first+letter+uppercase+es6
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const Wallet = (props) => {

    const { bank, value } = props;

    const Children = (props) => {
        const { image } = props;
        return (
            <nav style={{ display: 'flex', flexDirection: 'row', marginBottom: '30px' }}>
                <img src={image} alt={bank} width="55" style={{ marginLeft: '25px', marginTop: '20px' }} />
                <nav>
                    <S.Text style={{ marginTop: '28px', marginLeft: '15px', fontSize: 19 }}>{capitalizeFirstLetter(bank)}</S.Text>
                    <S.Text style={{ marginLeft: '15px', fontSize: 19, color: '#5a5f5f' }}>Saldo da conta</S.Text>
                </nav>
                <S.Text style={{ marginLeft: '65px', marginTop: '40px', fontSize: 19, color: '#3498db' }}>R$ {value}</S.Text>
            </nav>
        )
    }

    return (
        <nav className="wallet">
            <nav>
                {(bank === 'nubank' && (
                    <Children image={NubankImage} />
                ))}
                {(bank === 'binance' && (
                    <Children image={BinanceImage} />
                ))}
                {(bank === 'inter' && (
                    <Children image={InterImage} />
                ))}

            </nav>
        </nav>
    )
}

export default Wallet;