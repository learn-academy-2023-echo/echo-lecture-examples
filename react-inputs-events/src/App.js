import React, { useState } from "react"

import Reverse from "./components/Reverse"

const App = () => {
  const [name, setName] = useState("")
  const handleChange = (e) => {
    setName(e.target.value)
  }
  return (
    <>
      <h1>Get your Echo Cohort Secret Name!</h1>
      <label>Enter your name</label>
      <input type="text" onChange={handleChange} value={name} />

      <Reverse name={name} />
    </>
  )
}

export default App
