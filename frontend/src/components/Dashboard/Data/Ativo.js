import React from 'react'

import * as S from './../../../style/components'

const Ativo = (props) => {

    const { ativo, quantidade, saldo } = props;

    return (
        <S.Box style={{ display: 'flex', marginBottom: '25px', width:'500px', alignItems: 'center', border: 'none' }}>
            <nav>
                <S.Text style={{ fontSize: '13pt', marginLeft: '20px', color: '#95a5a6' }}>{ativo}</S.Text>
            </nav>
            <nav style={{ marginTop: '2px' }}>
                <S.Text style={{ fontSize: '13pt', marginLeft: '20px', color: '#95a5a6' }}>Saldo </S.Text>
            </nav>
            <nav style={{ marginTop: '2px' }}>
                <S.Text style={{ fontSize: '13pt', marginLeft: '20px', color: 'rgb(35, 177, 163)' }}>R${saldo}</S.Text>
            </nav>
            <nav style={{ marginTop: '2px' }}>
                <S.Text style={{ fontSize: '13pt', marginLeft: '20px', color: '#95a5a6' }}>Quantidade </S.Text>
            </nav>
            <nav style={{ marginTop: '2px' }}>
                <S.Text style={{ fontSize: '13pt', marginLeft: '20px',marginRight:'20px' }}>{quantidade} qtd</S.Text>
            </nav>
        </S.Box>
    )
}

export default Ativo;