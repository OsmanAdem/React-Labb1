import React, { useState } from 'react'
import Menu from '../Menu'
import Header from '../header'


function LandingPage() {
    const [showMenuPage, setShowMenuPage] = useState(false)

    return (
        <div>
            <Header />
            <button onClick={() => setShowMenuPage(!showMenuPage)}>
                {showMenuPage ? 'Hide Coffees' : 'Show Coffees'}
            </button>
            {showMenuPage ? <Menu /> : null}
        </div>
    )
}

export default LandingPage
