import React from 'react'
import Header from '../header'

const About = () => {
    return (
        <div className="about-container">
            <Header />
            <h1 className="about-title">About Us</h1>
            <p className="about-text">
                We are a cozy coffee shop located in the heart of the city,
                serving up delicious coffee, pastries, and snacks.
            </p>
            <p className="about-text">
                Our mission is to create a welcoming environment where everyone
                can come to relax, recharge, and enjoy a quality cup of coffee.
            </p>
            <h2 className="about-subtitle">Our History</h2>
            <p className="about-text">
                Our coffee shop was founded in 2010 by two friends who shared a
                passion for coffee and a desire to create a community gathering
                place.
            </p>
            <p className="about-text">
                Over the years, we have grown and expanded our menu to include a
                variety of beverages and food options, but our commitment to
                quality and community remains the same.
            </p>
            <h2 className="about-subtitle">Our Team</h2>
            <div className="about-team">
                <div className="about-member">
                    <img
                        className="about-member-image"
                        src="https://via.placeholder.com/200"
                        alt="Member 1"
                    />
                    <h3 className="about-member-name">Member 1</h3>
                    <p className="about-member-role">Role 1</p>
                </div>
                <div className="about-member">
                    <img
                        className="about-member-image"
                        src="https://via.placeholder.com/200"
                        alt="Member 2"
                    />
                    <h3 className="about-member-name">Member 2</h3>
                    <p className="about-member-role">Role 2</p>
                </div>
                <div className="about-member">
                    <img
                        className="about-member-image"
                        src="https://via.placeholder.com/200"
                        alt="Member 3"
                    />
                    <h3 className="about-member-name">Member 3</h3>
                    <p className="about-member-role">Role 3</p>
                </div>
            </div>
            <p className="about-text">
                Stop by and say hello - we would love to meet you!
            </p>
        </div>
    )
}

export default About
