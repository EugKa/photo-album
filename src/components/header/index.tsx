import React from 'react';
import { Link } from 'react-router-dom'
import './index.scss'

export const Header = () => {
  return (
    <header className='header'>
        <div className="header-wrapper">
            <Link to="/" className="header__link">
                <h2>Избранные</h2>
            </Link>
            <Link to="/Птицы" className="header__link">
                <h2>Птицы</h2>
            </Link>
            <Link to="/Здания" className="header__link">
                <h2>Здания</h2>
            </Link>
            <Link to="/Погода" className="header__link">
                <h2>Погода</h2>
            </Link>
        </div>
    </header>
  );
}