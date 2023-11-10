

export default function PuppyList({puppies, setPuppies}){
  return (
    <>
      <h2 id="rosterHeader">Puppies Roster</h2>
      <div className="puppyGridDiv">
        {puppies.map((puppy) => {
          return(
            <div className="puppyDiv">
              <h2>{puppy.name}</h2>
              <h3>{puppy.breed}</h3>
              <h5>Status: {puppy.status}</h5>
              <img src={puppy.imageUrl} alt={puppy.name} />
            </div>
          ) 
        })}
      </div>
    </>
  )
}