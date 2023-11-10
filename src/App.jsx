import { useState, useEffect } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import PuppyList from './components/PuppyList'
import './App.css'

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2109-FTB-ET-WEB-FT/players"

function App() {
  const [puppies, setPuppies] = useState([])

  useEffect(() => {
    async function fetchPuppies(){
      let response = await fetch(`${API_URL}`)
      let result = await response.json()

      console.log(result.data.players)
      setPuppies(result.data.players)
    }
    fetchPuppies()
  }, [])

  return (
    <>

      <div>
        <h1>Puppy Bowl</h1>
        <Routes>
          <Route path='/' element={<PuppyList puppies={puppies} setPuppies={setPuppies}/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
