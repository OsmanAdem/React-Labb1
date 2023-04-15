import React, { useState } from 'react'
import CoffeeHouseProps from '../CoffeeHouseProps'
import UserPage from '../Page'
import UserContext from '../Context'
import Menu from '../Menu'
import './style.css'

function LandingPage() {
    const [showMenuPage, setShowMenuPage] = useState(false)
    const [user, setUser] = useState({ Hello: 'Costumer', Choose: 'Coffee' })

    return (
        <div className="landing-page-container">
            <div className="same-height">
                <div className="button-container">
                    <button
                        className="menu-toggle-button"
                        onClick={() => setShowMenuPage(!showMenuPage)}
                    >
                        {showMenuPage ? 'Hide Coffees' : 'Show Coffees'}
                    </button>
                </div>
                <CoffeeHouseProps Coffee="InterN Coffee House" />
                <div className="coffeeProps"></div>
            </div>
            {showMenuPage ? <Menu /> : null}
            <div className="user">
                <UserContext.Provider value={{ user, setUser }}>
                    {!showMenuPage ? <UserPage /> : null}
                </UserContext.Provider>
            </div>
        </div>
    )
}

export default LandingPage
