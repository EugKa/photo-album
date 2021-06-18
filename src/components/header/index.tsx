import React from 'react';
import { NavLink } from 'react-router-dom'
import './index.scss'

export const Header = () => {
  return (
    <header className='header'>
        <div className="header-wrapper">
            <NavLink exact to="/" className="header__link">
                <h2>Избранные</h2>
            </NavLink>
            <NavLink  to="/Птицы" className="header__link">
                <h2>Птицы</h2>
            </NavLink>
            <NavLink  to="/Здания" className="header__link">
                <h2>Здания</h2>
            </NavLink>
            <NavLink  to="/Погода" className="header__link">
                <h2>Погода</h2>
            </NavLink>
        </div>
    </header>
  );
}