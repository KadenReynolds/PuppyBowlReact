import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2109-FTB-ET-WEB-FT/players"
let puppySuccess = "Add Puppy"

export default function AddPuppyForm({fetchPuppies}){
  const [name, setName] = useState("")
  const [breed, setBreed] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [error, setError] = useState(null)

  let navigate = useNavigate()

  async function handleSubmit(event){
    event.preventDefault()
    try {
      let response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
          name:name,
          breed:breed,
          imageUrl:imageUrl,
        })
      })
      let result = await response.json()
      console.log(result)
      puppySuccess = "Thank You!"
      fetchPuppies()
    } catch (error) {
      // setError(error.message)
      puppySuccess = "Uh Oh!" 
      setError(`[Error: ${error.message}]`)
    }

    setName("")
    setBreed("")
    setImageUrl("")
  }


  return(
    <>
      <h2 className="sectionHeader">Puppy Form</h2>
      <div className="puppyFormDiv">
        <h1>{puppySuccess}</h1>
        {error && <p>{error}</p>}
        <form action="" onSubmit={handleSubmit}>
          <label>
            Name:{" "}
            <br />
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)}/>  
          </label>
          <br />
          <br />
          <label>
            Breed:{" "}
            <br />
            <input type="text" required value={breed} onChange={(e) => setBreed(e.target.value)}/>  
          </label>
          <br />
          <br />
          <label>
            Image Url:{" "}
            <br />
            <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>  
          </label>
          <br />
          <br />
          <br />
          <button>Add Pup</button>
        </form>
      </div>
    </>
  )
}