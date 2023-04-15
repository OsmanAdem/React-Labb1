import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import About from './components/AboutPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/About" element={<About />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
