import React from 'react'
import './App.css'
import Card from './components/Card'
import MovieCard from './components/MovieCard'

function App() {
  

  return (
    <>
      <MovieCard movie={{title: "Interstellar", description:"A Christopher Nolan Film", url: "https://images.pexels.com/photos/30953532/pexels-photo-30953532/free-photo-of-black-and-white-alley-view-in-tokyo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}}/>
      <MovieCard movie={{title: "Inception", description: "Another Nolan Masterclass", url: "https://images.pexels.com/photos/3672792/pexels-photo-3672792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}} />


      <Card />
    </>
  )
}

export default App
