import { useState, useEffect } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import PuppyList from './components/PuppyList'
import Puppy from './components/Puppy'
import AddPuppyForm from './components/AddPuppyForm'
import Home from './components/Home'
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
      <h1>Puppy Bowl</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/puppyRoster">Roster</Link>
        <Link to="/puppyForm">Add Puppy</Link>
      </nav>
      <br />
      <br />
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/puppyRoster' element={<PuppyList puppies={puppies} setPuppies={setPuppies}/>}/>
          <Route path='/puppyRoster/:puppyIndex' element={<Puppy puppies={puppies}/>}/>
          <Route path='/puppyForm' element={<AddPuppyForm/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
