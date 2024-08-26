import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import empty from '../assets/empty-trash.png'

export default function Puppy({puppies, fetchPuppies}){
  const [error, setError] = useState(null)
  
  let {puppyIndex} = useParams()
  let puppy = puppies[puppyIndex]
  let navigate = useNavigate()
  let puppyNum = puppyIndex
  
  async function deletePuppy(event){
    event.preventDefault()
    try {
      let response = await fetch(`${API_URL}/${puppies[puppyIndex].id}`, {
        method:"DELETE",
      })
      let result = await response.json()
      console.log(result)
      fetchPuppies()
      navigate('/puppyRoster')
    } catch (error) {
      setError(error.message)
    }
  }


  console.log(puppy)

  return(
    <>
      {puppyIndex < puppies.length && puppyIndex >= 0 ?
        <>
          <div id="singlePupDiv">
            <h2 className="singlePupHeaders">{puppy.name}</h2>
            <h3 className="singlePupHeaders"><i>{puppy.breed}</i></h3>
            <h3>Team : Player</h3>
            <h3>#{puppy.teamId} : #{puppy.id}</h3>
            <h4>Status: {puppy.status}</h4>
            <img id="singlePupImg" src={puppy.imageUrl} alt={puppy.name} />
            <br />
            <br />
            <button className="singlePupDelete" onClick={deletePuppy}>
                    X
            </button>
          </div>
        </>
      :
          <p>Please choose valid ID</p>
    }
    </>
  )

}