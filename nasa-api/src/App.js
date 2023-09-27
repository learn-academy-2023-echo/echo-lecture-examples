import React, { useState } from "react"

// import mockNasa from "./mockNasa"

import "./App.css"

const App = () => {
  const [nasaData, setNasaData] = useState("")

  const apiKey = process.env.REACT_APP_API_KEY

  const nasaFetch = () => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((payload) => setNasaData(payload))
      .catch((error) => console.log(error))
  }

  return (
    <>
      <h1>Mars Rover Pictures</h1>
      <button onClick={nasaFetch}>Click here!</button>
      {nasaData &&
        nasaData.photos.map((obj, index) => {
          return <img src={obj.img_src} alt="mars Rover" key={index} />
        })}
    </>
  )
}

export default App
