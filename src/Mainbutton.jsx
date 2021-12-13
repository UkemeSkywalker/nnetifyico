import React from 'react'

function Mainbutton(props, className) {
    return (
        <div>
            <div className="header__btns">
                <button>{props.button}</button>
            </div>
        </div>
    )
}

export default Mainbutton
