import React from 'react'
import './style.css'

function Header() {
    return (
        <header className="header">
            <h1 className="header__title">Your App Name</h1>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header_item">
                        <a href="/#" className="header_link">
                            Home
                        </a>
                    </li>
                    <li className="header_item">
                        <a href="/About" className="header_link">
                            About
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
