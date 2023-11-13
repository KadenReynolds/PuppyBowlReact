import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import empty from '../assets/empty-trash.png'
import full from '../assets/full-trash.png'

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2109-FTB-ET-WEB-FT/players"

export default function PuppyList({puppies, setPuppies, fetchPuppies}){
  const [id, setId] = useState("")
  const [error, setError] = useState(null)

  let navigate = useNavigate()
  
  async function deletePuppy(event){
    event.preventDefault()
    try {
      let response = await fetch(`${API_URL}/${id}`, {
        method:"DELETE",
      })
      let result = await response.json()
      fetchPuppies()
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <h2 className="sectionHeader">Puppies Roster</h2>
      <div className="puppyGridDiv">
        {error && <p>{error}</p>}
        {puppies.length ?
          puppies.map((puppy) => {
            return(
              <div className="puppyDiv" key={puppy.id}>
                <h2>{puppy.name}</h2>
                <h3>{puppy.breed}</h3>
                <h5><i>Status: {puppy.status}</i></h5>
                <h6># {puppy.id}</h6>
                <img src={puppy.imageUrl} alt={puppy.name} />
                <br />
                <br />
                <button className='seeDetailsBtn' onClick={() => {
                  scrollTo(top)
                  navigate(`/puppyRoster/${puppies.indexOf(puppy)}`)
                  }}>See Details</button>
                <button className="deleteBtn" onMouseOver={() => {setId(puppy.id)}} onClick={deletePuppy}>
                  Delete
                </button>
              </div>
            ) 
        })
        :
        <h2>Loading...</h2>
      }
      </div>
    </>
  )
}