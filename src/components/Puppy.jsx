import { useParams } from "react-router-dom";
import { useState } from "react";
import empty from '../assets/empty-trash.png'

export default function Puppy({puppies}){
  const [error, setError] = useState(null)

  let {puppyIndex} = useParams()
  console.log(puppies[puppyIndex])

  // async function deletePuppy(event){
  //   event.preventDefault()
  //   try {
  //     let response = await fetch(`${API_URL}/${id}`, {
  //       method:"DELETE",
  //     })
  //     let result = await response.json()
  //     fetchPuppies()
  //   } catch (error) {
  //     setError(error.message)
  //   }
  // }

  return(
    <>
      {puppyIndex < puppies.length && puppyIndex >= 0 ?
        <div>
          <h2 className="singlePupHeaders">{puppies[puppyIndex].name}</h2>
          <h2 className="singlePupHeaders">{puppies[puppyIndex].breed}</h2>
          <h3>Team : Player</h3>
          <h3>#{puppies[puppyIndex].teamId} : #{puppies[puppyIndex].id}</h3>
          <h4>Status: {puppies[puppyIndex].status}</h4>
          <img id="singlePupImg" src={puppies[puppyIndex].imageUrl} alt={puppies[puppyIndex].name} />
          <br />
          <br />
          <button className="singlePupDelete">
                  X
          </button>
        </div>
      :
          <p>Please choose valid ID</p>
    }
    </>
  )

}