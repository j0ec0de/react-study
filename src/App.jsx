import React from 'react'
import './App.css'
import Home from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import Favourites from './pages/Favourites'
import LoginPage from './pages/LoginPage'
import NavBar from './components/NavBar'

function App() {
  

  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
