import {useState} from 'react'

export default function PuppyList({puppies, setPuppies}){
  const [deleteImage, setDeleteImage] = useState("blockwork\block_29\Puppy-Bowl-React\src\Images\icons8-empty-trash-50.png")

  let deleteIcon = "blockwork\block_29\Puppy-Bowl-React\src\Images\icons8-empty-trash-50.png"
  console.log(typeof(deleteIcon))

  return (
    <>
      <h2 id="rosterHeader">Puppies Roster</h2>
      <div className="puppyGridDiv">
        {puppies.map((puppy) => {
          return(
            <div className="puppyDiv" key={puppy.id}>
              <h2>{puppy.name}</h2>
              <h3>{puppy.breed}</h3>
              <h5>Status: {puppy.status}</h5>
              <img src={puppy.imageUrl} alt={puppy.name} />
              <br />
              <br />
              <button>See Details</button>
              <button className="deleteBtn" onMouseOver={() => {}}><img src={deleteIcon} alt="Delete" /></button>
            </div>
          ) 
        })}
      </div>
    </>
  )
}