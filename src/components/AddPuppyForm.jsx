

export default function AddPuppyForm(){
  return(
    <>
      <h2 className="sectionHeader">Puppy Form</h2>
      <div className="puppyFormDiv">
        <form action="">
          <label>
            Name:{" "}
            <br />
            <input type="text" />  
          </label>
          <br />
          <br />
          <label>
            Breed:{" "}
            <br />
            <input type="text" />  
          </label>
          <br />
          <br />
          <label>
            Image Url:{" "}
            <br />
            <input type="text" />  
          </label>
          <br />
          <br />
          <button>Add Pup</button>
        </form>
      </div>
    </>
  )
}