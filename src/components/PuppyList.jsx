import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import empty from '../assets/empty-trash.png'
import full from '../assets/full-trash.png'

export default function PuppyList({puppies, setPuppies}){
  let navigate = useNavigate()
  console.log(typeof(puppies))

  return (
    <>
      <h2 className="sectionHeader">Puppies Roster</h2>
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
              <button className='seeDetailsBtn' onClick={() => {
                scrollTo(top)
                navigate(`/puppyRoster/${puppies.indexOf(puppy)}`)
                }}>See Details</button>
              <button className="deleteBtn">
                Delete
              </button>
            </div>
          ) 
        })}
      </div>
    </>
  )
}