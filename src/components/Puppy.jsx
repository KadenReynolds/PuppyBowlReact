import { useParams } from "react-router-dom";
import { useState } from "react";
import empty from '../assets/empty-trash.png'

export default function Puppy({puppies}){
  const [error, setError] = useState(null)

  let {puppyIndex} = useParams()
  let puppy = puppies[puppyIndex]

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

  console.log(puppy)

  return(
    <>
      {puppyIndex < puppies.length && puppyIndex >= 0 ?
        <>
          <button className="nextPrevBtns">{"<"}</button>
          <button className="nextPrevBtns">{">"}</button>
          <div>
            <h2 className="singlePupHeaders">{puppy.name}</h2>
            <h2 className="singlePupHeaders">{puppy.breed}</h2>
            <h3>Team : Player</h3>
            <h3>#{puppy.teamId} : #{puppy.id}</h3>
            <h4>Status: {puppy.status}</h4>
            <img id="singlePupImg" src={puppy.imageUrl} alt={puppy.name} />
            <br />
            <br />
            <button className="singlePupDelete">
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