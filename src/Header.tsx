import React from 'react';
import "./Header.css";
import logo from "./images/Nnetify-Text.png";
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="Header">
            <div className="container">
                <div className="header__left sidebar__logo header__logo">
                    <img src={user.photoURL} alt="" />
                </div>
                <div className="header__btns">
                    <button>Visit Website</button>
                </div>
            </div>
        </div>
    )
}

export default Header
