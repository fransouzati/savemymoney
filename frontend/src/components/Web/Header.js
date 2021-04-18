import React from 'react'

import { useHistory } from 'react-router-dom'

const Header = (props) => {
    let history = useHistory();
    return (
        <div className="header">
            <hgroup>
                <h1 onClick={() => history.push('/')}>{document.title}</h1>
            </hgroup>
            <nav>
                {props.children}
            </nav>
        </div>
    )
}

export default Header;