// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home"
import Header from "./Components/Header"
import Coins from "./Components/Coins"
import Exchange from "./Components/Exchange"
import CoinDetails from "./Components/CoinDetails"
import Footer from './Components/Footer'



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />    
        <Route path="/exchange" element={<Exchange />} />    
        <Route path="/coins" element={<Coins />} />    
        <Route path="/coin/:id" element={<CoinDetails />} />    
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App