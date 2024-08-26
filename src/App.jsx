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
    fetchPuppies()
  }, [])
  
  async function fetchPuppies(){
    let response = await fetch(`${API_URL}`)
    let result = await response.json()

    console.log(result.data.players)
    setPuppies(result.data.players)
  }

  return (
    <>
      <h1>Puppy Bowl</h1>
      <nav>
        <Link to="/" className='navLinks'>Home</Link>
        <Link to="/puppyRoster" className='navLinks'>Roster</Link>
        <Link to="/puppyForm" className='navLinks'>Add Puppy</Link>
      </nav>
      <br />
      <br />
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/puppyRoster' element={<PuppyList puppies={puppies} setPuppies={setPuppies} fetchPuppies={fetchPuppies}/>}/>
          <Route path='/puppyRoster/:puppyIndex' element={<Puppy puppies={puppies} fetchPuppies={fetchPuppies}/>}/>
          <Route path='/puppyForm' element={<AddPuppyForm fetchPuppies={fetchPuppies}/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
