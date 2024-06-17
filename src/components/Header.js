// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <h1>Quiz App</h1>
                {/* Example link to home */}
                <Link to="/">Home</Link>
            </div>
        </header>
    );
};

export default Header;
