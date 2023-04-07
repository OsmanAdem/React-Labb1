import React, { useEffect, useState } from 'react'
import './style.css'

function Menu() {
    const [hotCoffeeData, setHotCoffeeData] = useState([])

    useEffect(() => {
        fetch('https://api.sampleapis.com/coffee/hot')
            .then((response) => response.json())
            .then((data) => setHotCoffeeData(data))
    }, [])

    return (
        <div className="landing-page">
            <h1>Hot Coffees</h1>
            <ul className="coffee-list">
                {hotCoffeeData.map((coffee) => (
                    <li key={coffee.id} className="coffee-item">
                        <h2>{coffee.title}</h2>
                        <p>{coffee.description}</p>
                        <p>{coffee.ingredients}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Menu
