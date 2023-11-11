import { useParams } from "react-router-dom";

export default function Puppy({puppies}){
  let {puppyIndex} = useParams()
  console.log(puppies[puppyIndex])

  return(
    <>
      {puppyIndex < puppies.length && puppyIndex >= 0 ?
        <div>
          <h2 className="singlePupHeaders">{puppies[puppyIndex].name}</h2>
          <h2 className="singlePupHeaders">{puppies[puppyIndex].breed}</h2>
          <img src={puppies[puppyIndex].imageUrl} alt={puppies[puppyIndex].name} />
        </div>
      :
          <p>Please choose valid ID</p>
    }
    </>
  )

}