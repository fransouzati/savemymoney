import React from 'react'

import * as S from './../style/components'

const Icon = (props) => {

    const { image, title, width, height, onClick } = props;

    return (
        <nav className="icon-button" style={{ marginBottom: '35px', marginTop: '12px' }}>
            <nav>
                <S.Text style={{ textAlign: 'center', fontSize: '12pt', marginBottom: '7px', color: '#bdc3c7' }}>{title}</S.Text>
                <div style={{ backgroundColor: '#ecf0f1', borderRadius: '90%', width: '64px', height: '80px', marginBottom: '10px' }}>
                    <img alt={title} src={image} width={width} height={height} onClick={onClick} style={{ marginLeft: '8px', marginTop: '15px' }} />
                </div>
            </nav>
        </nav>
    )
}

export default Icon;