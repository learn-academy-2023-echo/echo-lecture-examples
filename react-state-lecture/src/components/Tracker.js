import React, {useState} from 'react'


const Tracker = () => {

  const [gallons, setGallons] = useState(0)

  const addGallon = () => {
    setGallons(gallons + 1)
  }

  return(
    <>
      <p>Gallons: {gallons} </p>
      <button onClick={addGallon} style={{backgroundColor: "rebeccapurple", color: 'white'}}>Add A Gallon</button>
    </>
  )

}

export default Tracker 