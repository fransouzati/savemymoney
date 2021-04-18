import React from 'react'

import * as S from './../../style/components'

//https://www.codegrepper.com/code-examples/javascript/javascript+first+letter+uppercase+es6
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const CreditCard = (props) => {

    const { bank, data } = props;

    const Children = (props) => {
        return (
            <nav style={{ display: 'flex', flexDirection: 'row', marginBottom: '30px' }}>
                {(bank === 'nubank' && (
                    <>
                        <svg style={{ marginTop: '40px', marginLeft: '15px' }} fill="#b134eb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="35px" height="35px"><path d="M 5 7 C 2.25 7 0 9.25 0 12 L 0 38 C 0 40.75 2.25 43 5 43 L 45 43 C 47.75 43 50 40.75 50 38 L 50 12 C 50 9.25 47.75 7 45 7 Z M 5 9 L 45 9 C 46.667969 9 48 10.332031 48 12 L 48 38 C 48 39.667969 46.667969 41 45 41 L 5 41 C 3.332031 41 2 39.667969 2 38 L 2 12 C 2 10.332031 3.332031 9 5 9 Z M 17 13 C 10.382813 13 5 18.382813 5 25 C 5 31.617188 10.382813 37 17 37 C 20.078125 37 22.875 35.816406 25 33.90625 C 27.125 35.816406 29.925781 37 33 37 C 39.617188 37 45 31.617188 45 25 C 45 18.382813 39.617188 13 33 13 C 29.925781 13 27.125 14.183594 25 16.09375 C 22.875 14.183594 20.078125 13 17 13 Z M 33 15 C 38.535156 15 43 19.464844 43 25 C 43 30.535156 38.535156 35 33 35 C 30.449219 35 28.109375 34.066406 26.34375 32.5 C 27.996094 30.441406 29 27.839844 29 25 C 29 22.160156 27.996094 19.558594 26.34375 17.5 C 28.109375 15.933594 30.449219 15 33 15 Z" /></svg>
                    </>
                ))}
                {(bank === 'inter' && (
                    <>
                        <svg style={{ marginTop: '40px', marginLeft: '15px' }} fill="#e67e22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="35px" height="35px"><path d="M 5 7 C 2.25 7 0 9.25 0 12 L 0 38 C 0 40.75 2.25 43 5 43 L 45 43 C 47.75 43 50 40.75 50 38 L 50 12 C 50 9.25 47.75 7 45 7 Z M 5 9 L 45 9 C 46.667969 9 48 10.332031 48 12 L 48 38 C 48 39.667969 46.667969 41 45 41 L 5 41 C 3.332031 41 2 39.667969 2 38 L 2 12 C 2 10.332031 3.332031 9 5 9 Z M 17 13 C 10.382813 13 5 18.382813 5 25 C 5 31.617188 10.382813 37 17 37 C 20.078125 37 22.875 35.816406 25 33.90625 C 27.125 35.816406 29.925781 37 33 37 C 39.617188 37 45 31.617188 45 25 C 45 18.382813 39.617188 13 33 13 C 29.925781 13 27.125 14.183594 25 16.09375 C 22.875 14.183594 20.078125 13 17 13 Z M 33 15 C 38.535156 15 43 19.464844 43 25 C 43 30.535156 38.535156 35 33 35 C 30.449219 35 28.109375 34.066406 26.34375 32.5 C 27.996094 30.441406 29 27.839844 29 25 C 29 22.160156 27.996094 19.558594 26.34375 17.5 C 28.109375 15.933594 30.449219 15 33 15 Z" /></svg>
                    </>
                ))}
                <nav>
                    <S.Text style={{ marginTop: '28px', marginLeft: '15px', fontSize: 19 }}>{capitalizeFirstLetter(bank)}</S.Text>
                    <S.Text style={{ marginLeft: '15px', fontSize: 19, color: '#5a5f5f' }}>Total da fatura:</S.Text>
                    <S.Text style={{ marginLeft: '16px', fontSize: 19, color: '#5a5f5f' }}>Disponivel:</S.Text>
                </nav>
                <nav>
                    <S.Text style={{ marginLeft: '65px', marginTop: '47px', fontSize: 19, color: '#e74c3c' }}>R$ {data.available}</S.Text>
                    <S.Text style={{ marginLeft: '65px', marginTop: '5px', fontSize: 19, color: '#27ae60' }}>R$ {data.billTotal}</S.Text>
                </nav>
            </nav>
        )
    }

    return (
        <nav className="wallet">
            <nav>
                {(bank === 'nubank' && (
                    <Children bank={bank} data={data} />
                ))}
                {(bank === 'inter' && (
                    <Children bank={bank} data={data} />
                ))}

            </nav>
        </nav>
    )
}

export default CreditCard;