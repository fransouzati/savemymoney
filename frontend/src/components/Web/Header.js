import React from 'react'

const Header = (props) => {
    return (
        <div className="header">
            <hgroup>
                <h1>{document.title}</h1>
            </hgroup>
            <nav>
                {props.children}
            </nav>
        </div>
    )
}

export default Header;